
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(location.search);
    
    currentNarrative = params.get("narrative");
    const targetItem = decodeURIComponent(params.get("item"));
  
    fetch('js/objects.json')
      .then(response => response.json())
      .then(data => {
        items = data.items;
        narratives = data.meta.narratives;
  
        
        prepareNarratives(); 
  
        
        const index = currentSelection.findIndex(item => 
          item.itemName === targetItem
        );
  
        if (index !== -1) {
          showInfo(index); 
        } else {
          console.error("Object not found in filtered list:", targetItem);
          showInfo(0); 
        }
      });
  });