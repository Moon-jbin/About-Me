const schListEl = document.querySelector('.input-1')
const inputEl = document.querySelector('.icon-1')
const listOne = document.querySelector('.list-1')
const thisYear = document.querySelector('.this-year-1')
const deleteEl = document.querySelector('.delete-1')
const saveEl = document.querySelector('.save-1')
const modifyEl = document.querySelector('.modify-1')
const checkEl = document.querySelector('.check-1')

const schListTwoEl = document.querySelector('.input-2')
const inputTwoEl = document.querySelector('.icon-2')
const listTwo = document.querySelector('.list-2')
const thisYearTwo = document.querySelector('.this-year-2')
const deleteTwoEl = document.querySelector('.delete-2')
const saveTwoEl = document.querySelector('.save-2')
const modifyTwoEl = document.querySelector('.modify-2')
const checkTwoEl = document.querySelector('.check-2')

const schListThreeEl = document.querySelector('.input-3')
const inputThreeEl = document.querySelector('.icon-3')
const listThree = document.querySelector('.list-3')
const thisYearThree = document.querySelector('.this-year-3')
const deleteThreeEl = document.querySelector('.delete-3')
const saveThreeEl = document.querySelector('.save-3');
const modifyThreeEl = document.querySelector('.modify-3')
const checkThreeEl = document.querySelector('.check-3')

const schListFourEl = document.querySelector('.input-4')
const inputFourEl = document.querySelector('.icon-4')
const listFour = document.querySelector('.list-4')
const thisYearFour = document.querySelector('.this-year-4')
const deleteFourEl = document.querySelector('.delete-4')
const saveFourEl = document.querySelector('.save-4');
const modifyFourEl = document.querySelector('.modify-4')
const checkFourEl = document.querySelector('.check-4')

const schListFiveEl = document.querySelector('.input-5')
const inputFiveEl = document.querySelector('.icon-5')
const listFive = document.querySelector('.list-5')
const thisYearFive = document.querySelector('.this-year-5')
const deleteFiveEl = document.querySelector('.delete-5')
const saveFiveEl = document.querySelector('.save-5');
const modifyFiveEl = document.querySelector('.modify-5')
const checkFiveEl = document.querySelector('.check-5')


//icon style

checkEl.style.display = "none";
checkTwoEl.style.display = "none";
checkThreeEl.style.display = "none";
checkFourEl.style.display = "none";
checkFiveEl.style.display = "none";

modifyEl.style.display = "none";
modifyTwoEl.style.display = "none";
modifyThreeEl.style.display = "none";
modifyFourEl.style.display = "none";
modifyFiveEl.style.display = "none";

saveEl.style.display = "none";
saveTwoEl.style.display = "none";
saveThreeEl.style.display = "none";
saveFourEl.style.display = "none";
saveFiveEl.style.display = "none";

deleteEl.style.display = "none";
deleteTwoEl.style.display = "none";
deleteThreeEl.style.display = "none";
deleteFourEl.style.display = "none";
deleteFiveEl.style.display = "none";

// Puls

inputEl.addEventListener('click',function(){
  if(schListEl.value){
    modifyEl.style.display = "block";
    saveEl.style.display = "block";
    deleteEl.style.display = "block";

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
    modifyTwoEl.style.display = "block";
    saveTwoEl.style.display = "block";
    deleteTwoEl.style.display = "block";

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
    modifyThreeEl.style.display = "block";
    saveThreeEl.style.display = "block";
    deleteThreeEl.style.display = "block";

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
    modifyFourEl.style.display = "block";
    saveFourEl.style.display = "block";
    deleteFourEl.style.display = "block";

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
    modifyFiveEl.style.display = "block";
    saveFiveEl.style.display = "block";
    deleteFiveEl.style.display = "block";

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
  saveEl.style.display = "none";
  deleteEl.style.display = "none";
  modifyEl.style.display = "none";
  checkEl.style.display = "none";

  while(listOne.hasChildNodes()){
  listOne.removeChild(listOne.lastElementChild)
  thisYear.textContent = ' '
  }
  delete localStorage.test
})

deleteTwoEl.addEventListener('click', function () {
  modifyTwoEl.style.display = "none";
  saveTwoEl.style.display = "none";
  deleteTwoEl.style.display = "none";
  checkTwoEl.style.display = "none";

  while(listTwo.hasChildNodes()){
  listTwo.removeChild(listTwo.lastElementChild)
  thisYearTwo.textContent = ' '
  delete localStorage.testTwo
  
  }
})

deleteThreeEl.addEventListener('click', function () {
  checkThreeEl.style.display = "none";
  modifyThreeEl.style.display = "none";
  saveThreeEl.style.display = "none";
  deleteThreeEl.style.display = "none"; 

  while(listThree.hasChildNodes()){
  listThree.removeChild(listThree.lastElementChild)
  thisYearThree.textContent = ' '
  delete localStorage.testThree
  }
})

deleteFourEl.addEventListener('click', function () {
  checkFourEl.style.display = "none";
  modifyFourEl.style.display = "none";
  saveFourEl.style.display = "none";
  deleteFourEl.style.display = "none";

  while(listFour.hasChildNodes()){
  listFour.removeChild(listFour.lastElementChild)
  thisYearFour.textContent = ' '
  delete localStorage.testFour
  }
})

deleteFiveEl.addEventListener('click', function () {
  checkFiveEl.style.display = "none";
  modifyFiveEl.style.display = "none";
  saveFiveEl.style.display = "none";
  deleteFiveEl.style.display = "none";

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

modifyEl.addEventListener('click', function() {
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
// modify & check change
// const가 왜 사용이 안될지..? 알아보기..!!


var isClick = false;
function toggleClick() {
  isClick = !isClick;
  if (isClick){
    modifyEl.style.display = "none";
    checkEl.style.display = "block";
  }  
  else{
    modifyEl.style.display = "block";
    checkEl.style.display = "none";
  }
}
modifyEl.addEventListener('click', toggleClick)
checkEl.addEventListener('click', toggleClick)


var isClickTwo = false;
function toggleClickTwo() {
  isClickTwo = !isClickTwo;
  if (isClickTwo){
    modifyTwoEl.style.display = "none";
    checkTwoEl.style.display = "block";
  }  
  else{
    modifyTwoEl.style.display = "block";
    checkTwoEl.style.display = "none";
  }
}
modifyTwoEl.addEventListener('click', toggleClickTwo)
checkTwoEl.addEventListener('click', toggleClickTwo)


var isClickThree= false;
function toggleClickThree() {
  isClickThree = !isClickThree;
  if (isClickThree){
    modifyThreeEl.style.display = "none";
    checkThreeEl.style.display = "block";
  }  
  else{
    modifyThreeEl.style.display = "block";
    checkThreeEl.style.display = "none";
  }
}
modifyThreeEl.addEventListener('click', toggleClickThree)
checkThreeEl.addEventListener('click', toggleClickThree)


var isClickFour = false;
function toggleClickFour() {
  isClickFour = !isClickFour;
  if (isClickFour){
    modifyFourEl.style.display = "none";
    checkFourEl.style.display = "block";
  }  
  else{
    modifyFourEl.style.display = "block";
    checkFourEl.style.display = "none";
  }
}
modifyFourEl.addEventListener('click', toggleClickFour)
checkFourEl.addEventListener('click', toggleClickFour)


var isClickFive = false;
function toggleClickFive() {
  isClickFive = !isClickFive;
  if (isClickFive){
    modifyFiveEl.style.display = "none";
    checkFiveEl.style.display = "block";
  }  
  else{
    modifyFiveEl.style.display = "block";
    checkFiveEl.style.display = "none";
  }
}
modifyFiveEl.addEventListener('click', toggleClickFive)
checkFiveEl.addEventListener('click', toggleClickFive)





//  modify & check

checkEl.addEventListener('click',function() {
  const reWriteInput = document.querySelector('.newinput');
  const newReWrite = document.createElement('div')

  newReWrite.appendChild(document.createTextNode(reWriteInput.value))
  listOne.insertBefore(newReWrite, listOne.lastElementChild)
  listOne.removeChild(listOne.lastElementChild)
  
  localStorage.test = JSON.stringify(listOne.textContent)
  thisYear.textContent = new Date().toLocaleTimeString();
  
 
})

checkTwoEl.addEventListener('click',function() {
  const reWriteInputTwo = document.querySelector('.newinput-2');
  const newReWriteTwo = document.createElement('div')

  newReWriteTwo.appendChild(document.createTextNode(reWriteInputTwo.value))
  listTwo.insertBefore(newReWriteTwo, listTwo.lastElementChild)
  listTwo.removeChild(listTwo.lastElementChild)
  
  localStorage.testTwo = JSON.stringify(listTwo.textContent)
  thisYearTwo.textContent = new Date().toLocaleTimeString();
 
})

checkThreeEl.addEventListener('click',function() {
  const reWriteInputThree = document.querySelector('.newinput-3');
  const newReWriteThree = document.createElement('div')

  newReWriteThree.appendChild(document.createTextNode(reWriteInputThree.value))
  listThree.insertBefore(newReWriteThree, listThree.lastElementChild)
  listThree.removeChild(listThree.lastElementChild)
  
  localStorage.testThree = JSON.stringify(listThree.textContent)
  thisYearThree.textContent = new Date().toLocaleTimeString();
 
})

checkFourEl.addEventListener('click',function() {
  const reWriteInputFour = document.querySelector('.newinput-4');
  const newReWriteFour = document.createElement('div')
  
  newReWriteFour.appendChild(document.createTextNode(reWriteInputFour.value))
  listFour.insertBefore(newReWriteFour, listFour.lastElementChild)
  listFour.removeChild(listFour.lastElementChild)
  
  localStorage.testFour = JSON.stringify(listFour.textContent)
  thisYearFour.textContent = new Date().toLocaleTimeString();


 
})

checkFiveEl.addEventListener('click',function() {
  const reWriteInputFive = document.querySelector('.newinput-5');
  const newReWriteFive = document.createElement('div')
  
  newReWriteFive.appendChild(document.createTextNode(reWriteInputFive.value))
  listFive.insertBefore(newReWriteFive, listFive.lastElementChild)
  listFive.removeChild(listFive.lastElementChild)
  
  localStorage.testFive = JSON.stringify(listFive.textContent)
  thisYearFive.textContent = new Date().toLocaleTimeString();
 
})