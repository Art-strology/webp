function geoNarrativeButtons (objects){
  const base = "chronological_narrative.html";
  const geo = "?narrative=geography";
  const values = ["Babylon","Egypt","Greece","China"];
  var geo_block = document.getElementsByClassName("caption bottom-up Geographical")[0];
  var div = document.createElement("div");
  div.className = "row justify-content-around";
  geo_block.appendChild(div);
  
  values.forEach(element =>{
    let currentSelection = objects.filter( i =>i.info["geography"]?.includes(element));                                                
    currentSelection.sort( (i,j) => i['@sort'] < j['@sort'] ? -1 : 1 );
    let obj = currentSelection[0]["itemName"];
    var object = "&object=" + obj;
    var urlNarrative = base + geo + object;
    let button = document.createElement("button");
    button.className = element;
    button.innerHTML = element;
    button.onclick = () => location.href = urlNarrative;
    div.appendChild(button);
  });
}

function consNarrativeButtons (objects){
  const base = "chronological_narrative.html";
  const cons = "?narrative=constellation";
  var cons_block = document.getElementsByClassName("row justify-content-around Constellations");
  var values = ["Andromeda","Aquarius","Aries","Canis Major","Capricorn","Draco","Leo","Scorpius","Taurus","Ursa Major"];
  
  var counter = 0;
  while(counter<cons_block.length){
    let sliced = values.slice(0,5);
    sliced.forEach(element =>{
      let currentSelection = objects.filter( i =>i.info["constellation"]?.includes(element));                                                
      currentSelection.sort( (i,j) => i['@sort'] < j['@sort'] ? -1 : 1 );
      let obj = currentSelection[0]["itemName"];
      var object = "&object=" + obj;
      var urlNarrative = base + cons + object;
      let button = document.createElement("button");
      button.className = element;
      button.innerHTML = element;
      button.onclick = () => location.href = urlNarrative;
      cons_block[counter].appendChild(button);
    });
    values.splice(0,5)
    counter++;
  };
}

function symNarrativeButtons(objects){
  const base = "chronological_narrative.html";
  const sym = "?narrative=symbol";
  var sym_block = document.getElementsByClassName("row justify-content-around Symbols");
  const values = ["Bird","Bull","Dragon","Goat-Fish","Humanoid","Lion","Tiger","Turtle"];
  
  var counter = 0;
  while(counter<sym_block.length){
    let sliced = values.slice(0,4);
    sliced.forEach(element =>{
      let currentSelection = objects.filter( i =>i.info["symbol"]?.includes(element));                                                
      currentSelection.sort( (i,j) => i['@sort'] < j['@sort'] ? -1 : 1 );
      let obj = currentSelection[0]["itemName"];
      var object = "&object=" + obj;
      var urlNarrative = base + sym + object;
      let button = document.createElement("button");
      button.className = element;
      button.innerHTML = element;
      button.onclick = () => location.href = urlNarrative;
      sym_block[counter].appendChild(button);
    });
    values.splice(0,4)
    counter++;
  };
}

function collectionSlider(){
  var slider = document.getElementsByClassName("slide-track")[0];
  var counter = 0;
  var imgs = ["img_compressed/babylonian_bull_of_heaven.jpeg", "img_compressed/babylonian_goatfish.JPG", "img_cropped/babylonian_goddess_250.JPG", 
    "img_cropped/babylonian_hired_man_250ù.JPG", "img_cropped/babylonian_the_great_one_250.JPG","img_compressed/chinese_bird.jpg",
    "img_compressed/chinese_dragon.jpg","img_compressed/chinese_tiger.jpg","img_compressed/chinese_turtle.jpg","img_compressed/egyptian_isis_sopdet.jpg",
    "img_compressed/egyptian_leg_of_bull.JPG","img_cropped/egyptian_sheep_250.PNG","img_cropped/egyptian_taurus_250.jpg","img_cropped/egyptian_two_turtle_2.jpg",
    "img_cropped/greek_andromeda_250.JPG","img_cropped/greek_capricorn_250.JPG","img_cropped/greek_draco_250.JPG","img_compressed/greek_leo.jpeg",
    "img_compressed/greek_taurus.jpg"]
  
  while (counter<2){
    for(let i = 0; i < imgs.length; i++){
      let slide = document.createElement("div");
      slide.className = "slide";
      let img = document.createElement("img");
      img.src = imgs[i];
      slide.appendChild(img);
      slider.appendChild(slide);    
      }
    counter++;
  }
}

document.addEventListener("DOMContentLoaded", function(e) {
AOS.init();
collectionSlider();
var textWrapper = document.getElementsByClassName('title')[0];
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  anime.timeline({loop: false})
    .add({
      targets: '.title .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 150 * (i+1)
    })

fetch('js/objects.json').then(response => response.json())
.then(data => {
  objects = data.objects;

  geoNarrativeButtons(objects);
  consNarrativeButtons(objects);
  symNarrativeButtons(objects);

});
});

