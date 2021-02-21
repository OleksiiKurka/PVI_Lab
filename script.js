function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
 
}

function drop(ev) {
  ev.preventDefault();
    if(ev.target.tagName=="IMG"){return;}
  var data = ev.dataTransfer.getData("text");

  ev.target.appendChild(document.getElementById(data));
  
  
}

(function(){
  
    let items = document.querySelectorAll('.cell-white,.cell-black');
    items.forEach(function(item) {
        item.addEventListener('dragover', allowDrop, false);
        item.addEventListener('drop', drop, false);
      });
    let itemImg = document.querySelectorAll('td img');
    itemImg.forEach(function(item1) {
        item1.addEventListener('dragstart', drag, false);
        item1.setAttribute("draggable","true")
    });
})()