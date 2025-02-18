function goHhref(type,className) {
    
    if(type == 0){
        window.location.href = 'chronological_narrative.html'
        return
    }
    let url = 'chronological_narrative.html' // 定义跳转类型
    // 定义数据对象 确定标题
    let objects = {
        "Babylon": "&object=Orange-cream shell cylinder seal",
        "Egypt": "&object=PALETTE DEPICTING A PAIR OF MUD TURTLES",
        "Greece": "&object=NECK AMPHORA: HERAKLES AND THE NEMEAN LION",
        "China": "&object=ROOF TILE END WITH RED BIRD OF THE SOUTH",
        "Andromeda" : "&object=Limestone Cylinder Seal",
        "Aquarius" : "&object=The Adda Seal",
        "Aries" : "&object=Orange-cream shell cylinder seal",
        "CanisMajor" : "&object=ISIS OF COPTOS",
        "Capricorn" : "&object=Ceremonial Basin",
        "Draco" : "&object=HERAKLES AND THE GOLDEN APPLES",
        "Leo" : "&object=PALETTE DEPICTING A PAIR OF MUD TURTLES",
        "Scorpio" : "&object=MIRROR WITH ANIMAL HEADS AND AZURE DRAGONS",
        "Taurus" : "&object=Votive Relief",
        "UrsaMajor": "&object=STELE OF ABKAOU",
        "Bird" : "&object=ROOF TILE END WITH RED BIRD OF THE SOUTH",
        "Bull" : "&object=Votive Relief",
        "Dragon" : "&object=HERAKLES AND THE GOLDEN APPLES",
        "Goat-Fish" : "&object=Ceremonial Basin",
        "Humanoid" : "&object=Orange-cream shell cylinder seal",
        "Lion" : "&object=NECK AMPHORA: HERAKLES AND THE NEMEAN LION",
        "Tiger" : "&object=ROOF TILE END WITH TIGER",
        "Turtle": "&object=PALETTE DEPICTING A PAIR OF MUD TURTLES",
    }
    // 定义变量确定 数据大类
    let typeText = ''
    if(type == 1){
        typeText = 'geography'
    }else if(type == 2){
        typeText = 'constellation'
    }else if(type == 3){
        typeText = 'symbol'
    }
    let geo = '?narrative=' + typeText
    let val = "&value=" + className;
    var urlNarrative = url + geo + val + objects[className];
    window.location.href = urlNarrative

}