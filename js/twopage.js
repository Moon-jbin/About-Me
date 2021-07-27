const schListEl = document.querySelector('.input-1')
const inputEl = document.querySelector('.icon-1')
const listOne = document.querySelector('.list-1')
const thisYear = document.querySelector('.this-year-1')


const schListTwoEl = document.querySelector('.input-2')
const inputTwoEl = document.querySelector('.icon-2')
const listTwo = document.querySelector('.list-2')
const thisYearTwo = document.querySelector('.this-year-2')

const schListThreeEl = document.querySelector('.input-3')
const inputThreeEl = document.querySelector('.icon-3')
const listThree = document.querySelector('.list-3')
const thisYearThree = document.querySelector('.this-year-3')

const schListFourEl = document.querySelector('.input-4')
const inputFourEl = document.querySelector('.icon-4')
const listFour = document.querySelector('.list-4')
const thisYearFour = document.querySelector('.this-year-4')

const schListFiveEl = document.querySelector('.input-5')
const inputFiveEl = document.querySelector('.icon-5')
const listFive = document.querySelector('.list-5')
const thisYearFive = document.querySelector('.this-year-5')


inputEl.addEventListener('click',function(){
  listOne.textContent = schListEl.value
  thisYear.textContent = new Date().toLocaleTimeString()
});

inputTwoEl.addEventListener('click',function(){
  listTwo.textContent = schListTwoEl.value
  thisYearTwo.textContent = new Date().toLocaleTimeString()
});

inputThreeEl.addEventListener('click',function(){
  listThree.textContent = schListThreeEl.value
  thisYearThree.textContent = new Date().toLocaleTimeString()
});

inputFourEl.addEventListener('click',function(){
  listFour.textContent = schListFourEl.value
  thisYearFour.textContent = new Date().toLocaleTimeString()
});

inputFiveEl.addEventListener('click',function(){
  listFive.textContent = schListFiveEl.value
  thisYearFive.textContent = new Date().toLocaleTimeString()
});
