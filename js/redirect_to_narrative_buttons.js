function chroNarrative(){
    location.href = "chronological_narrative.html"
  }
  function geoNarrative (class_){
    const base = "chronological_narrative.html";
    const geo = "?narrative=geography";
    const objects = {"Babylon": "&object=Orange-cream shell cylinder seal",
                  "Egypt": "&object=PALETTE DEPICTING A PAIR OF MUD TURTLES",
                  "Greece": "&object=NECK AMPHORA: HERAKLES AND THE NEMEAN LION",
                  "China": "&object=ROOF TILE END WITH RED BIRD OF THE SOUTH",};
    
    for(key in objects){
        if(class_.includes(key)){
            class_ = key;
        };
    };
    var value = "&value=" + class_;
    var obj = objects[class_];
    var urlNarrative = base + geo + value + obj;
    location.href = urlNarrative;
    
  }

  function consNarrative (class_){
    const base = "chronological_narrative.html";
    const cons = "?narrative=constellation";
    const objects = {"Andromeda" : "&object=Limestone Cylinder Seal",
                  "Aquarius" : "&object=The Adda Seal",
                  "Aries" : "&object=Orange-cream shell cylinder seal",
                  "Canis Major" : "&object=ISIS OF COPTOS",
                  "Capricorn" : "&object=Ceremonial Basin",
                  "Draco" : "&object=HERAKLES AND THE GOLDEN APPLES",
                  "Leo" : "&object=PALETTE DEPICTING A PAIR OF MUD TURTLES",
                  "Scorpio" : "&object=MIRROR WITH ANIMAL HEADS AND AZURE DRAGONS",
                  "Taurus" : "&object=Votive Relief",
                  "Ursa Major": "&object=STELE OF ABKAOU",
    };
    for(key in objects){
        if(class_.includes(key)){
            class_ = key;
        };
    };
    var value = "&value=" + class_;
    var obj = objects[class_];
    var urlNarrative = base + cons + value + obj;
    location.href = urlNarrative;
  }

  function symNarrative(class_){
    const base = "chronological_narrative.html";
    const sym = "?narrative=symbol";
    const objects = {"Bird" : "&object=ROOF TILE END WITH RED BIRD OF THE SOUTH",
                  "Bull" : "&object=Votive Relief",
                  "Dragon" : "&object=HERAKLES AND THE GOLDEN APPLES",
                  "Goat-Fish" : "&object=Ceremonial Basin",
                  "Humanoid" : "&object=Orange-cream shell cylinder seal",
                  "Lion" : "&object=NECK AMPHORA: HERAKLES AND THE NEMEAN LION",
                  "Tiger" : "&object=ROOF TILE END WITH TIGER",
                  "Turtle": "&object=PALETTE DEPICTING A PAIR OF MUD TURTLES",
    };
    for(key in objects){
        if(class_.includes(key)){
            class_ = key;
        };
    };
    var value = "&value=" + class_;
    var obj = objects[class_];
    var urlNarrative = base + sym + value + obj;
    location.href = urlNarrative;
  }