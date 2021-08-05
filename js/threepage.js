const areaOneEl = document.querySelector(".area1");
const sortable = Object.fromEntries(Object.entries(localStorage).sort())

let newtagEl;

if(true){
for(var i =0; i < localStorage.length; i++){
  newtagEl = document.createElement('div')
  newtagEl.setAttribute("id",`Id-${i}`);
  newtagEl.setAttribute("class","lists")
  // newtagEl.setAttribute("draggable","true")
  // newtagEl.setAttribute("ondragstart","drag(event)")

  newtagEl.textContent = Object.values(sortable)[i]
  areaOneEl.appendChild(newtagEl)
  

  function allowDrop(ev){
    ev.preventDefault();
  }

  function drag(ev){
    ev.dataTransfer.setData(`Id-${i}`,ev.target.id);
  }

  function drop(ev){
    ev.preventDefault();

    var data = ev.dataTransfer.getData(`Id-${i}`)

    ev.target.appendChild(document.getElementById(data));
  }

  
  }
}


console.log(i)