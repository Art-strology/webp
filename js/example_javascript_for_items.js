//Vitali's code//
var objects = []
var narratives = []
var currentSelection = []
var currentNarrative = ""
var currentValue = ""
var currentSort = ""

document.addEventListener("DOMContentLoaded", async function(event) {
	console.log("Ready to start with phase 4") //This line outputs a message ("Ready to start with phase 4") to the browser's console for debugging purposes//


	fetch('js/objects.json') //he fetch() function is used to make a request to a URL and retrieve data from it --> it fetches a JSON file// //Why it’s useful: Fetch is an asynchronous function, meaning it doesn’t block the rest of the code from running while it waits for the response. This is useful for making HTTP requests (like getting data from a server or file) without freezing the rest of the page.//
	.then(response => response.json()) //When the response is received, response.json() parses the response as JSON = JSON data is parsed as a JavaScript object (it's like a python dictionary).//
	.then(data => {	//data = data obtained from the JSON file//
		objects = data.objects //retriving properties from data//
		narratives = data.meta.narratives

        getItemfromLink ()

		const params = new URLSearchParams(window.location.search);//checks url
        if (!params.has("narrative") && !params.has("value")) {//if url does NOT have narrative and value parameters, 

		currentNarrative = data.meta.startNarrative //startNarrative
		currentValue = data.meta.startValue //startValue 
        console.log(currentNarrative, currentValue);

		prepareNarratives()
    }})
})

function getItemfromLink (){
	const urlParams = new URLSearchParams(window.location.search);
    const urlNarrative = urlParams.get('narrative');
    const urlValue = urlParams.get('value');
	const urlObject = urlParams.get('object');

	if (urlNarrative && urlValue && urlObject) {

        console.log(urlNarrative, urlValue, urlObject);
		
		currentNarrative = urlNarrative
		const startObject = objects.find(i => i.itemName === urlObject);

		if (startObject) {
			currentValue = urlValue
			currentSort = startObject['@sort'];
			console.log(currentValue, currentSort)

			prepareNarratives();

			const index = currentSelection.findIndex(i => i.itemName === urlObject);
			if (index !== -1) {
				showInfo(index);
			} else {
				console.error("Item not found in the current selection.");
			}
		} else {
			console.error("Item specified in the URL not found in the items list.");
		}
	} else {
		console.warn("URL does not contain narrative or item parameters.");
	}
}

function prepareNarratives() {
	currentSelection = objects.filter( i =>  //filter is ann array method that works like a python for loop = it filter each person (i) in the people array//
		i.info[currentNarrative]?.includes(currentValue)//accesses the info object of the person (i) and retrieves the value of the key currentNarrative, a variable that holds a narrative identifier or name. ?.: This is the optional chaining operator, which ensures that if i.info[currentNarrative] is undefined or null, it won't throw an error. Instead, it will return undefined. .includes(currentValue) checks if the string or array contains currentValue, another variable which represents a specific value related to the narrative.// 
	)                                                //the result of this line is that currentSelection will only include people whose info[currentNarrative] contains currentValue//
	currentSelection.sort( (i,j) =>  // This sorts the currentSelection array.  The sort function compares the values of the @sort property in each person object (i and j are the two people being compared in each iteration)//
		i['@sort'] < j['@sort'] ? -1 : 1  //comparator function for sorting = If i['@sort'] is less than j['@sort'], it returns -1, which means i comes before j in the sorted order; If i['@sort'] is not less than j['@sort'], it returns 1, meaning i comes after j //
	)
	if (currentSelection.length==0 || currentNarrative=='date')
		currentSelection = objects	//if no people meet the condition, this line resets currentSelection to the full people array//
	var index  = currentSelection.findIndex( i => i['@sort'] == currentSort )//This searches through the currentSelection array to find the index of the person whose @sort property matches currentSort//
	if (index == -1) index = 0
	showInfo(index)
}

function showInfo(index) {    //is designed to display detailed information about a person with the correspondent imput index number in the currentSelection array//
	var object = currentSelection[index] //the person with the index position in the currentSelecion array//
	currentSort = object['@sort'] //stores the value of a property @sort from the person object into a variable currentSort//
	inner("header",object.itemName) ;
	//inner("fullHeader",object.itemName) ;
	byId("img").src = object.image
	byId("img").alt = object.itemName
	createInfoTable(object)
	inner("shortInfo",object.shortInfo)
	inner("longerInfo","<p>"+ object.longerInfo.join("</p><p>") + "</p>")
	inner("fullInfo", "<p>"+ object.fullInfo + "</p>")
	
	prepareNavigationButtons(index)
	headerImg();
}

let currentState = 1;

function toggleDescription() {
    const para1 = document.getElementById('shortInfo');
    const para2 = document.getElementById('longerInfo');
    const para3 = document.getElementById('fullInfo');
    const button = document.getElementById('btn_more');

    if (currentState === 1) {
        // Mostra il secondo paragrafo
        para1.classList.remove('d-none');
        para2.classList.remove('d-none');
        para3.classList.add('d-none');
        button.innerHTML = '<i class="fa-solid fa-plus"></i> show even more';
        currentState = 2;
    } else if (currentState === 2) {
        // Mostra il terzo paragrafo
        para1.classList.remove('d-none');
        para2.classList.remove('d-none');
        para3.classList.remove('d-none');
        button.innerHTML = '<i class="fa-solid fa-minus"></i> show less';
        currentState = 3;
    } else if (currentState === 3) {
        // Chiudi il terzo paragrafo e torna al primo
        para1.classList.remove('d-none');
        para2.classList.add('d-none');
        para3.classList.add('d-none');
        button.innerHTML = '<i class="fa-solid fa-plus"></i> show more';
        currentState = 1;
    }
}

function createInfoTable(object) {
	inner("infoTable","",true) ; //clears info table --> takes away all the rows from the table body with id infoTable//
	for (i in object.info) {    // iterates over all the properties (or keys) in the person.info object//
		if (object.info[i] !== null) { //i guess that for the narrative that the object is not part of the value is null--> es. "zodiac":"null" if the item if notpart of the zodiac narrative//
			if (narratives.includes(i)) { //checks whether the current property key (i) exists in the narratives array//
				var items = object.info[i].split(", ") //splits the string value of person.info[i] into an array of items using the comma and space (", ") as a delimiter --> this is done in case, as in Vitali's example, you have more value for a narrative es. Los Angeles, California, USA; WE DIDN'T CONSIDER THIS POSSIBILITY//
				var val = []
				for (j in items) { //iterates over each item in the items array//
					val.push('<a class="button" role="button" href="#" onclick="changeNarrative(\''+i+'\',\''+items[j]+'\')">'+items[j]+'</a>') //For each item in the items array, this line creates an HTML <a> element (link) and adds it to the val[] array. An onclick attribute that calls the changeNarrative() function when the link is clicked. It passes the current narrative type (i) and the current item (items[j]) as arguments to changeNarrative(). The inner text of the link is the current items[j]//
				} //This allows each item in a narrative (like each zodiac sign) to be clickable, and when clicked, it will trigger a narrative change//
			inner("infoTable","<tr><th>"+i+"</th><td>"+val.join(", ")+"</td></tr>", false)
			} else {
				inner("infoTable","<tr><th>"+i+"</th><td>"+object.info[i]+"</td></tr>", false) //in case i is not a narrative, you just add it's value on the table without turning it into a link --> es. a person's age, or, in our case, an object's material(?) are not narratives --> the info property in the json file contains the object's metadata displayed in the info table, some may be narratives, others not//
			}
		}
	}
}

function prepareNavigationButtons(index) {
	if (index > 0) { //This would mean that the current item is not the first item in the currentSelection array//
		byId("buttonPrevious").disabled = false //Enables the "Previous" button = it can be clicked//
		byId("buttonPrevious").onclick = () => showInfo(index-1) //Sets the onclick event handler for the "Previous" button. When the button is clicked, it calls the showInfo() function and passes index-1 as the argument. This will show the information of the previous item in the currentSelection array//
		//byId("buttonPrevious").innerHTML = currentSelection[index-1].shortName//Changes the label (inner text) of the "Previous" button to the shortName of the previous item in the currentSelection array//	
	} else { //first item//
		byId("buttonPrevious").disabled = true //Disables the "Previous" button//
		byId("buttonPrevious").onclick = null 
		//byId("buttonPrevious").innerHTML = "--" 
	}
	if (index < currentSelection.length-1) { //checks if there are more items after the current one//
		byId("buttonNext").disabled = false //Enables the "Next"//
		byId("buttonNext").onclick = () => showInfo(index+1) // When clicked, it will call showInfo() and pass index+1 as the argument to display the next item in the currentSelection array//
		//byId("buttonNext").innerHTML = currentSelection[index+1].shortName
	} else {
		byId("buttonNext").disabled = true //Disables the "Next" button //
		byId("buttonNext").onclick = null
		//byId("buttonNext").innerHTML = "--"
	}
	if (currentNarrative!='date') {	
		inner('narrative', currentNarrative+": "+currentValue)
	} else {
		inner('narrative', "chronological order")
	}
 //This line updates an element (with the id="narrative") to display the current narrative and value//
}

function changeNarrative(narrative,value) {
		currentNarrative = narrative
		currentValue = value
		prepareNarratives()
}

function byId(id) {
	return document.getElementById(id)
}

function show(id) {
	document.getElementById(id).classList.remove('d-none')
}

function hide(id) {
	document.getElementById(id).classList.add('d-none')
}

function inner(id,content, emptyFirst=true) {
	if(emptyFirst) document.getElementById(id).innerHTML = "" ; 
	document.getElementById(id).innerHTML += content ; 
}

function headerImg () {
	var dict = {"date" : "https://github.com/IMWT-project/webp/blob/main/img_compressed/meridiana3.jpg?raw=true",
				"geography" : "https://github.com/IMWT-project/webp/blob/main/img_compressed/worldmap1.jpg?raw=true",
				"constellation" : "https://github.com/IMWT-project/webp/blob/main/img_compressed/constellation3.jpg?raw=true",
				"symbol" : "https://github.com/IMWT-project/webp/blob/main/img_compressed/shapes_1_cutt.jpg?raw=true"
	};

	var img = byId("top-img");

	for(var key in dict) {
		if(currentNarrative == key){
			var value = dict[key];
			img.src = value;
		}
	}
}
