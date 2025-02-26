var mapContainer = document.getElementsByClassName('map_container');            
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {
    trigger: 'hover focus',
    container: '.map_container',
}));

const mapLinks = document.querySelectorAll('.map_link') 
const noSubnavBtn = document.querySelectorAll('.no_subnav_btn')
const subNavBtns = document.querySelectorAll('.subnavbtn')
const subNavContents = document.querySelectorAll('.subnav-content')
const subNavContentLinks = document.querySelectorAll('.subnav-content-link')
const subnavs = document.querySelectorAll('.subnav')
const gElements = document.querySelectorAll('g');
const narrativeButton = document.getElementById('narrative_button');
const allItems = document.querySelector('.all_items');
const itemsLinks = document.querySelectorAll('.items_links'); 

mapLinks.forEach(mapLink => {
    mapLink.addEventListener('click', function(event){
        var items = mapLink.getAttribute('items');
        var items_links = mapLink.getAttribute('items_links');     
        var narrative_button_link = mapLink.getAttribute('narrative_button_link');
        event.preventDefault();
        showItems(items);
        showItemsLinks(items_links);
        narrativeButtonLink(narrative_button_link);
        colorChangeForActiveLinks(mapLinks, mapLink);
    });
});

noSubnavBtn.forEach(noSubnavBtn => {
    noSubnavBtn.addEventListener('click', function() {
        subNavContents.forEach(subNavContent => {
            subNavContent.style.display = 'none';
        });
        subNavBtns.forEach(subnavBtn => {
            subnavBtn.classList.remove('active');
        });
    });
});

subNavBtns.forEach(subnavBtn => {
    subnavBtn.addEventListener('click', function() {
        const subNavContentId = subnavBtn.getAttribute('subnav_content_id');
        const subNavContentToShow = document.getElementById(subNavContentId);
        subNavContents.forEach(subNavContent => {
            if (subNavContent != subNavContentToShow) {
                subNavContent.style.display ='none'
            }    
            else {
                if (subNavContentToShow.style.display ==='block') {
                    subNavContentToShow.style.display ='none'
                    subnavBtn.classList.remove('active');
                }
                else {
                    subNavContentToShow.style.display ='block'
                }
            }
        });
        subNavContentLinks.forEach(link => {
            link.addEventListener('click', function() {
                colorChangeForActiveLinks(subNavBtns, subnavBtn); // Change color of subnavbtn
            });
        });
    });
});    

function showItems (narrative) {
    if (narrative != 'all'){
        gElements.forEach((gElement) => {
            if (gElement.classList.contains(narrative)) {
            gElement.style.display = 'block';
            } else {
            gElement.style.display = 'none';
        }    
    })}
    else {
        gElements.forEach((gElement) => {
            gElement.style.display = 'block';
    })};
}

function showItemsLinks (narrative_links) {
    if(narrative_links != 'all_items') {
        allItems.style.display = 'none';
        itemsLinks.forEach((itemLink) => {
            if (itemLink.classList.contains(narrative_links)) {
                itemLink.style.display = 'block';
            } else {
                itemLink.style.display = 'none';
        }
    })}
    else {
        allItems.style.display = 'block';
        itemsLinks.forEach((itemLink) => {
            itemLink.style.display = 'none';
    })}; 
}

function narrativeButtonLink (link) {
    if(link) {
        narrativeButton.style.display = 'block';
        narrativeButton.href = link;
    }
    else {
        narrativeButton.style.display = 'none';
    };
}

function colorChangeForActiveLinks (className, link) {
    className.forEach(function(otherLink) {
        otherLink.classList.remove('active');
        });
    link.classList.add('active');
}