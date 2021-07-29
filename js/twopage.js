const schListEl = document.querySelector('.input-1')
const inputEl = document.querySelector('.icon-1')
const listOne = document.querySelector('.list-1')
const thisYear = document.querySelector('.this-year-1')
const deleteEl = document.querySelector('.delete-1')
const saveEl = document.querySelector('.save-1')
const modifyEl = document.querySelector('.modify-1')

const schListTwoEl = document.querySelector('.input-2')
const inputTwoEl = document.querySelector('.icon-2')
const listTwo = document.querySelector('.list-2')
const thisYearTwo = document.querySelector('.this-year-2')
const deleteTwoEl = document.querySelector('.delete-2')
const saveTwoEl = document.querySelector('.save-2')
const modifyTwoEl = document.querySelector('.modify-2')

const schListThreeEl = document.querySelector('.input-3')
const inputThreeEl = document.querySelector('.icon-3')
const listThree = document.querySelector('.list-3')
const thisYearThree = document.querySelector('.this-year-3')
const deleteThreeEl = document.querySelector('.delete-3')
const saveThreeEl = document.querySelector('.save-3');
const modifyThreeEl = document.querySelector('.modify-3')

const schListFourEl = document.querySelector('.input-4')
const inputFourEl = document.querySelector('.icon-4')
const listFour = document.querySelector('.list-4')
const thisYearFour = document.querySelector('.this-year-4')
const deleteFourEl = document.querySelector('.delete-4')
const saveFourEl = document.querySelector('.save-4');
const modifyFourEl = document.querySelector('.modify-4')

const schListFiveEl = document.querySelector('.input-5')
const inputFiveEl = document.querySelector('.icon-5')
const listFive = document.querySelector('.list-5')
const thisYearFive = document.querySelector('.this-year-5')
const deleteFiveEl = document.querySelector('.delete-5')
const saveFiveEl = document.querySelector('.save-5');
const modifyFiveEl = document.querySelector('.modify-5')


// Puls

inputEl.addEventListener('click',function(){
  if(schListEl.value){
    if(listOne.textContent){
      listOne.removeChild(listOne.lastElementChild)

      const newChild = document.createElement('div')
    newChild.appendChild(document.createTextNode(schListEl.value))
    listOne.insertBefore(newChild, listOne.lastElementChild)

  thisYear.textContent = new Date().toLocaleTimeString();

    schListEl.value = ''
    }
    else{
  const newChild = document.createElement('div')
  newChild.appendChild(document.createTextNode(schListEl.value))
  listOne.insertBefore(newChild, listOne.lastElementChild)

  thisYear.textContent = new Date().toLocaleTimeString();

  schListEl.value = ''
 }
  }
  else{
    return
  }
 }
);

inputTwoEl.addEventListener ('click',function(){
  if(schListTwoEl.value){
    if(listTwo.textContent){
      listTwo.removeChild(listTwo.lastElementChild)
      const newChildTwo = document.createElement('div')
      newChildTwo.appendChild(document.createTextNode(schListTwoEl.value))
      listTwo.insertBefore(newChildTwo, listTwo.lastElementChild)

      thisYearTwo.textContent = new Date().toLocaleTimeString();
      schListTwoEl.value = ''
    }
    else{
      const newChildTwo = document.createElement('div')
      newChildTwo.appendChild(document.createTextNode(schListTwoEl.value))
      listTwo.insertBefore(newChildTwo, listTwo.lastElementChild)

      thisYearTwo.textContent = new Date().toLocaleTimeString()
      schListTwoEl.value = ''
    }
  
  }
  else{
    return
  }
});

inputThreeEl.addEventListener('click',function(){
  if(schListThreeEl.value){
    if(listThree.textContent){
      listThree.removeChild(listThree.lastElementChild)
      const newChildThree = document.createElement('div')
      newChildThree.appendChild(document.createTextNode(schListThreeEl.value))
      listThree.insertBefore(newChildThree, listThree.lastElementChild)

      thisYearThree.textContent = new Date().toLocaleTimeString();
      schListThreeEl.value = ''
    }
    else{
      const newChildThree = document.createElement('div')
      newChildThree.appendChild(document.createTextNode(schListThreeEl.value))
      listThree.insertBefore(newChildThree, listThree.lastElementChild)

      thisYearThree.textContent = new Date().toLocaleTimeString()
      schListThreeEl.value = ''
    }
  
  
  }
  else{
    return
  }
});

inputFourEl.addEventListener('click',function(){
  if(schListFourEl.value){
    if(listFour.textContent){
      listFour.removeChild(listFour.lastElementChild)
      const newChildFour = document.createElement('div')
      newChildFour.appendChild(document.createTextNode(schListFourEl.value))
      listFour.insertBefore(newChildFour, listFour.lastElementChild)

      thisYearFour.textContent = new Date().toLocaleTimeString();
      schListFourEl.value = ''
    }
    else{
      const newChildFour = document.createElement('div')
      newChildFour.appendChild(document.createTextNode(schListFourEl.value))
      listFour.insertBefore(newChildFour, listFour.lastElementChild)

      thisYearFour.textContent = new Date().toLocaleTimeString()
      schListFourEl.value = ''
    }
  }
  else{
    
  }
});

inputFiveEl.addEventListener('click',function(){
  if(schListFiveEl.value){
    if(listFive.textContent){
      listFive.removeChild(listFive.lastElementChild)
      const newChildFive = document.createElement('div')
      newChildFive.appendChild(document.createTextNode(schListFiveEl.value))
      listFive.insertBefore(newChildFive, listFive.lastElementChild)

      thisYearFive.textContent = new Date().toLocaleTimeString();
      schListFiveEl.value = ''
    }
    else{
      const newChildFive = document.createElement('div')
      newChildFive.appendChild(document.createTextNode(schListFiveEl.value))
      listFive.insertBefore(newChildFive, listFive.lastElementChild)

      thisYearFive.textContent = new Date().toLocaleTimeString()
      schListFiveEl.value = ''
    }
  }
  else{
    return
  }
});



// delete

deleteEl.addEventListener('click', function () {
  while(listOne.hasChildNodes()){
  listOne.removeChild(listOne.lastElementChild)
  thisYear.textContent = ' '
  }
  delete localStorage.test
})

deleteTwoEl.addEventListener('click', function () {
  while(listTwo.hasChildNodes()){
  listTwo.removeChild(listTwo.lastElementChild)
  thisYearTwo.textContent = ' '
  delete localStorage.testTwo
  
  }
})

deleteThreeEl.addEventListener('click', function () {
  while(listThree.hasChildNodes()){
  listThree.removeChild(listThree.lastElementChild)
  thisYearThree.textContent = ' '
  delete localStorage.testThree
  }
})

deleteFourEl.addEventListener('click', function () {
  while(listFour.hasChildNodes()){
  listFour.removeChild(listFour.lastElementChild)
  thisYearFour.textContent = ' '
  delete localStorage.testFour
  }
})

deleteFiveEl.addEventListener('click', function () {
  while(listFive.hasChildNodes()){
  listFive.removeChild(listFive.lastElementChild)
  thisYearFive.textContent = ' '
  delete localStorage.testFive
  }
})




// save

saveEl.addEventListener('click',function() {
  localStorage.test = JSON.stringify(listOne.textContent)

})

saveTwoEl.addEventListener('click',function() {
  localStorage.testTwo = JSON.stringify(listTwo.textContent)

})

saveThreeEl.addEventListener('click',function() {
  localStorage.testThree = JSON.stringify(listThree.textContent)

})

saveFourEl.addEventListener('click',function() {
  localStorage.testFour = JSON.stringify(listFour.textContent)

})

saveFiveEl.addEventListener('click',function() {
  localStorage.testFive = JSON.stringify(listFive.textContent)

})





// modify

modifyEl.addEventListener('click',function() {
  if(listOne.textContent){
    const newInput = document.createElement('input')
    newInput.setAttribute("type","text")
    newInput.setAttribute("class","newinput")
    listOne.insertBefore(newInput, listOne.lastElementChild)

    newInput.value = listOne.textContent
    listOne.removeChild(listOne.lastElementChild)
    }
  else{
    return
    }
  });
modifyTwoEl.addEventListener('click',function() {
  if(listTwo.textContent){
    const newInputTwo = document.createElement('input')
    newInputTwo.setAttribute("type","text")
    newInputTwo.setAttribute("class","newinput-2")
    listTwo.insertBefore(newInputTwo, listTwo.lastElementChild)

    newInputTwo.value = listTwo.textContent
    listTwo.removeChild(listTwo.lastElementChild)
    }
  else{
      return
      }
    });

modifyThreeEl.addEventListener('click',function() {
 if(listThree.textContent){
    const newInputThree = document.createElement('input')
    newInputThree.setAttribute("type","text")
    newInputThree.setAttribute("class","newinput-3")
    listThree.insertBefore(newInputThree, listThree.lastElementChild)  
    newInputThree.value = listThree.textContent
    listThree.removeChild(listThree.lastElementChild)
  }
  else{
    return
      }
});

modifyFourEl.addEventListener('click',function() {
  if(listFour.textContent){
    const newInputFour = document.createElement('input')
    newInputFour.setAttribute("type","text")
    newInputFour.setAttribute("class","newinput-4")
    listFour.insertBefore(newInputFour, listFour.lastElementChild)
    newInputFour.value = listFour.textContent
    listFour.removeChild(listFour.lastElementChild)
  }
  else{
      return
    }
});
modifyFiveEl.addEventListener('click',function() {
  if(listFive.textContent){
    const newInputFive = document.createElement('input')
    newInputFive.setAttribute("type","text")
    newInputFive.setAttribute("class","newinput-5")
    listFive.insertBefore(newInputFive, listFive.lastElementChild)
    newInputFive.value = listFive.textContent
    listFive.removeChild(listFive.lastElementChild)
  }
  else{
      return
      }
});