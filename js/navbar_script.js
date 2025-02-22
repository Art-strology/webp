var objects = [];

function chroNarrative(){
    location.href = "chronological_narrative.html"
  }

  function hidemenu()
  {
    document.getElementById('navbar-dropdown-menu').className = "dropdown-menu";
  }

  function navbarSubnarratives(objects){
    var navbarMenu = document.getElementById("navbar-dropdown-menu");
    const base = "chronological_narrative.html";
    const narr_value = {"Geographical":["Babylon","Egypt","Greece","China"],
      "Constellations":["Andromeda","Aquarius","Aries","Canis Major","Capricorn","Draco","Leo","Scorpius","Taurus","Ursa Major"],
      "Symbols":["Bird","Bull","Dragon","Goat-Fish","Humanoid","Lion","Tiger","Turtle"]};
    const narrs_url = {"Geographical":"geography","Constellations":"constellation","Symbols":"symbol"}

    for(narr in narr_value){
      let outerList = document.createElement("li");
      outerList.className = "dropdown-submenu "+ narr;
      let outerAnchor = document.createElement("a");
      outerAnchor.className = "dropdown-item dropdown-toggle";
      outerAnchor.innerHTML = narr;
      let ulElem = document.createElement("ul");
      ulElem.className = "dropdown-menu";
      let values = narr_value[narr];
      values.forEach(element => {
        let currentSelection = objects.filter( i =>i.info[narrs_url[narr]]?.includes(element))                                                
        currentSelection.sort( (i,j) => i['@sort'] < j['@sort'] ? -1 : 1 );
        let obj = currentSelection[0]["itemName"];
        let innerListElem = document.createElement("li");
        let innerAnchor = document.createElement("a");
        innerAnchor.className = "dropdown-item "+ element;
        innerAnchor.innerHTML = element;
        let narrative = "?narrative=" + narrs_url[narr];
        let value = "&value=" + element;
        let object = "&object=" + obj;
        dynamicURL = base + narrative + value + object;
        innerAnchor.href = dynamicURL;
        innerListElem.appendChild(innerAnchor);
        ulElem.appendChild(innerListElem);
      });
      outerList.appendChild(outerAnchor);
      outerList.appendChild(ulElem);
      navbarMenu.appendChild(outerList);
    }                  
  };

  document.addEventListener("DOMContentLoaded", function(e) {
    fetch('js/objects.json').then(response => response.json())
    .then(data => {
      objects = data.objects;
      navbarSubnarratives(objects);
    });

    
  });