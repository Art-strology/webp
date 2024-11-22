
var mapContainer = document.getElementById('map_container');            
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {
    trigger: 'hover focus',
    container: '.map_container'
}));

const gElements = document.querySelectorAll('g');

const narrativeButton = document.querySelector('#narrative_button');

const allItems = document.querySelector('.all_items');

const itemsLinks = document.querySelectorAll('.items_links');

const showAllItems = document.querySelector('#show_all_items');
showAllItems.addEventListener('click', function(event) {
    event.preventDefault();
    allItems.style.display = 'block';
    itemsLinks.forEach((itemLink) => {
        itemLink.style.display = 'none'; // Hide each items link
    });
    gElements.forEach((gElement) => {
        gElement.style.display = 'block';
        narrativeButton.style.display = 'none';
        itemsLinks.forEach((itemLink) => {
            itemLink.style.display = 'none';
        });    
    });
});

const showItemsInChronologicalOrder = document.querySelector('#show_chronological_order');
showItemsInChronologicalOrder.addEventListener('click', function(event) {
    event.preventDefault();
    allItems.style.display = 'none';
    narrativeButton.style.display = 'block';
    narrativeButton.href = 'item1.html';
    itemsLinks.forEach((itemLink) => {
        if (itemLink.classList.contains('chronological_links')) {
            itemLink.style.display = 'block';
        } else {
            itemLink.style.display = 'none';
        }
    });
    gElements.forEach((gElement) => {
        gElement.style.display = 'block';
   
    });
});

const zodiacLink = document.querySelector('#show_zodiac');
zodiacLink.addEventListener('click', function(event) {
    event.preventDefault();
    allItems.style.display = 'none';
    narrativeButton.style.display = 'block';
    narrativeButton.href = 'item1.html'; 
    itemsLinks.forEach((itemLink) => {
        if (itemLink.classList.contains('zodiac_links')) {
            itemLink.style.display = 'block';
        } else {
            itemLink.style.display = 'none';
        }
    });      
    gElements.forEach((gElement) => {
        if (gElement.classList.contains('zodiac')) {
            gElement.style.display = 'block';
        } else {
            gElement.style.display = 'none';
        }
    });
});        


const babiloniaLink = document.querySelector('#show_babilonian_items');  
babiloniaLink.addEventListener('click', function(event) {
    event.preventDefault();
    allItems.style.display = 'none';
    narrativeButton.style.display = 'block';
    narrativeButton.href = 'https://it.wikipedia.org/wiki/Babilonia#Altro';
    itemsLinks.forEach((itemLink) => {
        if (itemLink.classList.contains('babilonia_links')) {
            itemLink.style.display = 'block';
        } else {
            itemLink.style.display = 'none';
        }
    });  
    gElements.forEach((gElement) => {
        if (gElement.classList.contains('babilonian_item')) {
        gElement.style.display = 'block';
        } else {
        gElement.style.display = 'none';
        }
    });
});


const egyptLink = document.querySelector('#show_egyptian_items');
egyptLink.addEventListener('click', function(event) {
    event.preventDefault();
    allItems.style.display = 'none';
    narrativeButton.style.display = 'block';
    narrativeButton.href = 'https://it.wikipedia.org/wiki/Egitto';
    itemsLinks.forEach((itemLink) => {
        if (itemLink.classList.contains('egypt_links')) {
            itemLink.style.display = 'block';
        } else {
            itemLink.style.display = 'none';
        }
    }); 
    gElements.forEach((gElement) => {
        if (gElement.classList.contains('egyptian_item')) {
        gElement.style.display = 'block';
        } else {
        gElement.style.display = 'none';
        }
    });
});


const greeceLink = document.querySelector('#show_greek_items');
greeceLink.addEventListener('click', function(event) {
    event.preventDefault();
    allItems.style.display = 'none';
    narrativeButton.style.display = 'block';
    narrativeButton.href = 'https://it.wikipedia.org/wiki/Grecia';
    itemsLinks.forEach((itemLink) => {
        if (itemLink.classList.contains('greece_links')) {
            itemLink.style.display = 'block';
        } else {
            itemLink.style.display = 'none';
        }
    }); 
    gElements.forEach((gElement) => {
        if (gElement.classList.contains('greek_item')) {
        gElement.style.display = 'block';
        } else {
        gElement.style.display = 'none';
        }
    });
});

const chinaLink = document.querySelector('#show_chinese_items');
chinaLink.addEventListener('click', function(event) {
    event.preventDefault();
    allItems.style.display = 'none';
    narrativeButton.style.display = 'block';
    narrativeButton.href = 'https://it.wikipedia.org/wiki/Cina';
    itemsLinks.forEach((itemLink) => {
        if (itemLink.classList.contains('china_links')) {
            itemLink.style.display = 'block';
        } else {
            itemLink.style.display = 'none';
        }
    });    
    gElements.forEach((gElement) => {
        if (gElement.classList.contains('chinese_item')) {
        gElement.style.display = 'block';
        } else {
        gElement.style.display = 'none';
        }
    });
});

const bullLink = document.querySelector('#show_bull_items');
bullLink.addEventListener('click', function(event) {
    event.preventDefault();
    allItems.style.display = 'none';
    narrativeButton.style.display = 'block';
    narrativeButton.href = 'item1.html';
    itemsLinks.forEach((itemLink) => {
        if (itemLink.classList.contains('bull_links')) {
            itemLink.style.display = 'block';
        } else {
            itemLink.style.display = 'none';
        }
    }); 
    gElements.forEach((gElement) => {
        if (gElement.classList.contains('bull')) {
        gElement.style.display = 'block';
        } else {
        gElement.style.display = 'none';
        }
    });
});


const capricornLink = document.querySelector('#show_capricorn_items');
capricornLink.addEventListener('click', function(event) {
    event.preventDefault();
    allItems.style.display = 'none';
    narrativeButton.style.display = 'block';
    narrativeButton.href = 'item1.html';
    itemsLinks.forEach((itemLink) => {
        if (itemLink.classList.contains('capricorn_links')) {
            itemLink.style.display = 'block';
        } else {
            itemLink.style.display = 'none';
        }
    }); 
    gElements.forEach((gElement) => {
        if (gElement.classList.contains('capricorn')) {
        gElement.style.display = 'block';
        } else {
        gElement.style.display = 'none';
        }
    });
});


const humanLink = document.querySelector('#show_human_items');
humanLink.addEventListener('click', function(event) {
    event.preventDefault();
    allItems.style.display = 'none';
    narrativeButton.style.display = 'block';
    narrativeButton.href = 'item1.html';
    itemsLinks.forEach((itemLink) => {
        if (itemLink.classList.contains('human_links')) {
            itemLink.style.display = 'block';
        } else {
            itemLink.style.display = 'none';
        }
    }); 
    gElements.forEach((gElement) => {
        if (gElement.classList.contains('human')) {
        gElement.style.display = 'block';
        } else {
        gElement.style.display = 'none';
        }
    });
});


const dragonLink = document.querySelector('#show_dragon_items');
dragonLink.addEventListener('click', function(event) {
    event.preventDefault();
    allItems.style.display = 'none';
    narrativeButton.style.display = 'block';
    narrativeButton.href = 'item1.html';
    itemsLinks.forEach((itemLink) => {
        if (itemLink.classList.contains('dragon_links')) {
            itemLink.style.display = 'block';
        } else {
            itemLink.style.display = 'none';
        }
    }); 

    gElements.forEach((gElement) => {
        if (gElement.classList.contains('dragon')) {
        gElement.style.display = 'block';
        } else {
        gElement.style.display = 'none';
        }
    });
});


const turtleLink = document.querySelector('#show_turtle_items');
turtleLink.addEventListener('click', function(event) {
    event.preventDefault();
    allItems.style.display = 'none';
    narrativeButton.style.display = 'block';
    narrativeButton.href = 'item1.html';
    itemsLinks.forEach((itemLink) => {
        if (itemLink.classList.contains('turtle_links')) {
            itemLink.style.display = 'block';
        } else {
            itemLink.style.display = 'none';
        }
    }); 
    gElements.forEach((gElement) => {
        if (gElement.classList.contains('turtle')) {
        gElement.style.display = 'block';
        } else {
        gElement.style.display = 'none';
        }
    });
});
