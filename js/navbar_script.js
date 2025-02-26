
function chroNarrative(){
    location.href = "chronological_narrative.html"
  }


  function hidemenu()
  {
    document.getElementById('navbar-dropdown-menu').className = "dropdown-menu";
  }

  function geoNarrative (class_){
    const base = "chronological_narrative.html";
    const geo = "?narrative=geography";
    const objects = {"Babylon": "&object=ORANGE-CREAM SHELL CYLINDER SEAL",
                  "Egypt": "&object=PALETTE DEPICTING A PAIR OF MUD TURTLES",
                  "Greece": "&object=NECK AMPHORA: HERAKLES AND THE NEMEAN LION",
                  "China": "&object=ROOF TILE END WITH ZHUQUE",};
    
    for(key in objects){
        if(class_.includes(key)){
            class_ = key;
        };
    };
    var obj = objects[class_];
    var urlNarrative = base + geo + obj;
    location.href = urlNarrative;
    
  }

  function consNarrative (class_){
    const base = "chronological_narrative.html";
    const cons = "?narrative=constellation";
    const objects = {"Andromeda" : "&object=LIMESTONE CYLINDER SEAL",
                  "Aquarius" : "&object=THE ADDA SEAL",
                  "Aries" : "&object=ORANGE-CREAM SHELL CYLINDER SEAL",
                  "Canis Major" : "&object=ISIS OF COPTOS",
                  "Capricorn" : "&object=CEREMONIAL BASIN",
                  "Draco" : "&object=HERAKLES AND THE GOLDEN APPLES",
                  "Leo" : "&object=PALETTE DEPICTING A PAIR OF MUD TURTLES",
                  "Scorpius" : "&object=MIRROR WITH ANIMAL HEADS AND AZURE DRAGONS",
                  "Taurus" : "&object=VOTIVE RELIEF",
                  "Ursa Major": "&object=STELE OF ABKAOU",
    };
    for(key in objects){
        if(class_.includes(key)){
            class_ = key;
        };
    };
    var obj = objects[class_];
    var urlNarrative = base + cons + obj;
    location.href = urlNarrative;
  }

  function symNarrative(class_){
    const base = "chronological_narrative.html";
    const sym = "?narrative=symbol";
    const objects = {"Bird" : "&object=ROOF TILE END WITH ZHUQUE",
                  "Bull" : "&object=VOTIVE RELIEF",
                  "Dragon" : "&object=HERAKLES AND THE GOLDEN APPLES",
                  "Goat-Fish" : "&object=CEREMONIAL BASIN",
                  "Humanoid" : "&object=ORANGE-CREAM SHELL CYLINDER SEAL",
                  "Lion" : "&object=NECK AMPHORA: HERAKLES AND THE NEMEAN LION",
                  "Tiger" : "&object=ROOF TILE END WITH BAIHU",
                  "Turtle": "&object=PALETTE DEPICTING A PAIR OF MUD TURTLES",
    };
    for(key in objects){
        if(class_.includes(key)){
            class_ = key;
        };
    };
    var obj = objects[class_];
    var urlNarrative = base + sym + obj;
    location.href = urlNarrative;
  }

  document.addEventListener("DOMContentLoaded", function(e) {
    document.querySelectorAll(".dropdown-submenu a")
    .forEach(function (element) {
        element.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            var submenu = [document.getElementById("navbar-submenu-Geographical"), document.getElementById("navbar-submenu-Constellations"), document.getElementById("navbar-submenu-Symbols")];
            for(let i = 0 ; i<submenu.length; i++){
              if(submenu[i].classList.contains("show")){
                submenu[i].classList.remove("show");
                
              }
              else{
                this.nextElementSibling.classList.toggle("show");
              }

            } 
        });
    });
  });