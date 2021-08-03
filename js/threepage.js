const areaOneEl = document.querySelector(".area1");
// const arrayStorageEl = Object.assign({},Object.entries(localStorage.key(i)).sort())
// localStorage.getItem(localStorage.key(i))
if(true){
// function forEachKey(callback) {
//   for (var i = 0; i < localStorage.length; i++) {
//     // callback(Object.entries(localStorage.key(i)));
//     callback(localStorage.key(i))
//   }
// }
for(var i =0; i < localStorage.length; i++){
  const sortable = Object.fromEntries(Object.entries(localStorage).sort())
  const newtagEl = document.createElement('div')
  newtagEl.setAttribute("id",`${i}`);
  newtagEl.setAttribute("class","lists")
  newtagEl.textContent = Object.values(sortable)[i]
  areaOneEl.appendChild(newtagEl)
  }
}

const test = Object.entries(localStorage).sort();

const sortable = Object.fromEntries(Object.entries(localStorage).sort())

console.log(Object.values(sortable)[1])



// if(true){
//   for(var a = 0; a < localStorage.length; a++){
//     console.log(Object.entries(localStorage).sort()[0].concat(...
//       Object.entries(localStorage).sort()
//     ))
//   }
// }

// console.log(Object.entries(localStorage).sort()[0].concat(...
//   Object.entries(localStorage).sort()


// Object.entries(localStorage).sort()[0].concat(...
//   Object.entries(localStorage).sort()


// console.log(localStorage)
// console.log(localStorage.getItem(Object.entries(localStorage.key(0))))

// JSON.parse(localStorage.getItem(localStorage.key(i)))
// console.log(Object.assign({},arrayStorageEl))

// document.write(Object.assign({},arrayStorageEl))


// console.log(Object.assign({},...Object.entries(localStorage).sort()))


// console.log( localStorage.key(0))
// console.log(Object.entries(localStorage.key(0)))
// console.log(Object.assign({}, Object.entries(localStorage.key(0))))