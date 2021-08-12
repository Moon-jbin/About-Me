const inputEl = document.querySelector('.icon-1');
const workEl = document.querySelector('.work-list');
const schListEl = document.querySelector('.input-1');
const bottomAreaEl = document.querySelector('.area2');
const realMoreEl = document.querySelector('.real-more');
const allKillEl = document.querySelector('.all-kill');
const allSaveEl = document.querySelector('.all-save');

// new Swiper('.swiper-container',{
//   slidesPerView: 3, // 한번에 보여줄 스라이드 개수
//   spaceBetween: 800, // 슬라이드 사이 여백
//   centeredSlides: true,
//   loop: true
// })

let s = 0;

realMoreEl.style.display="none";

inputEl.addEventListener('click',function(){

  s += 1;
  if (schListEl.value){
    const indexS = `${s}`;
    // localStorage.setItem(`${s}`,schListEl.value)


    const commonEl = document.createElement('div');
      commonEl.setAttribute("class", "commonlist");
      commonEl.setAttribute("id", `${indexS}`)
  
      const listOne = document.createElement('div');
      listOne.setAttribute("id", `${indexS}`)
      listOne.setAttribute("class", "list-1");
  
  
      const saveEl = document.createElement('div');
      saveEl.setAttribute("class", 'material-icons');
      saveEl.setAttribute("id", `${indexS}`)
      saveEl.classList.add("save-icon")
      saveEl.textContent = 'save'
  
  
      const deleteEl = document.createElement('delete-1')
      deleteEl.setAttribute("class",'material-icons' )
      deleteEl.setAttribute("id", `${indexS}`)
      deleteEl.classList.add('cancel-icon')
      deleteEl.textContent = 'highlight_off'
  
  
      const modifyEl = document.createElement('modify-1')
      modifyEl.setAttribute("class", 'material-icons')
      modifyEl.setAttribute('id',  `${indexS}`)
      modifyEl.classList.add('modify-icon')
      modifyEl.textContent = 'note_alt'
  
      const checkEl = document.createElement('check-1')
      checkEl.setAttribute("class", 'material-icons')
      checkEl.setAttribute("id", `${indexS}`)
      checkEl.classList.add('check-icon')
      checkEl.textContent = 'check'
      checkEl.style.display = "none";
  
    //  const thisYear = document.createElement('div');
    //  thisYear.setAttribute("class","this-year-1");
    //  thisYear.textContent = new Date().toLocaleTimeString();
    
      commonEl.appendChild(listOne)
      // commonEl.appendChild(thisYear)
      commonEl.appendChild(saveEl)
      commonEl.appendChild(deleteEl)
      commonEl.appendChild(checkEl)
      commonEl.appendChild(modifyEl)
  
      workEl.insertBefore(commonEl, workEl.lastElementChild)
      
      // text 넣은 후 입력 코드
  
      const newChild = document.createElement('div')
      newChild.setAttribute("id", `${indexS}`)
      newChild.appendChild(document.createTextNode(schListEl.value))
      // `${indexS}.   ` 
      listOne.insertBefore(newChild, listOne.lastElementChild)
    
      schListEl.value = ''
  
      
  
      // delete
      deleteEl.addEventListener('click',function(){
        s -= 1;
        workEl.removeChild(commonEl)
        delete localStorage.removeItem(indexS)
        }
      )
  
      allKillEl.addEventListener('click',function(){
        s = 0;
        localStorage.clear()
        commonEl.remove()
      })
  
  
  
      
      saveEl.addEventListener('click',function() {
        localStorage.setItem(indexS, listOne.textContent)
         }
       )
  
       allSaveEl.addEventListener('click',function(){
        localStorage.setItem(indexS, listOne.textContent)
       })
  
  
      //modify
      modifyEl.addEventListener('click', function() {
        if(listOne.textContent){
          const newInput = document.createElement('input')
          newInput.setAttribute("type","text")
          newInput.setAttribute("id",  `${indexS}`)
          newInput.setAttribute("class","newinput")
          listOne.insertBefore(newInput, listOne.lastElementChild)  
          newInput.value = listOne.textContent
          listOne.removeChild(listOne.lastElementChild)
          }
        }
      )
        // modify & check change
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
  
        // check
        checkEl.addEventListener('click',function() {
        const reWriteInput = document.querySelector('.newinput');
        const newReWrite = document.createElement('div')
            
        newReWrite.appendChild(document.createTextNode(reWriteInput.value))
        listOne.insertBefore(newReWrite, listOne.lastElementChild)
        listOne.removeChild(listOne.lastElementChild)    
        localStorage.setItem(s,listOne.textContent)
        // thisYear.textContent = new Date().toLocaleTimeString();
        }
      )
      
      // 더보기 기능
      if(workEl.childElementCount > 4){
        realMoreEl.style.display="block"
        realMoreEl.style.width="45px"
        commonEl.style.display='none'
      
        realMoreEl.before(commonEl)
        
        realMoreEl.addEventListener("click", function () {
          realMoreEl.style.display="none";
          commonEl.style.display=""
        }) 
      }
  
  }
}
)


    // const indexS = `${s}`;

  //   const commonEl = document.createElement('div');
  //   commonEl.setAttribute("class", "commonlist");
  //   commonEl.setAttribute("id", `${indexS}`)

  //   const listOne = document.createElement('div');
  //   listOne.setAttribute("id",`${indexS}`)
  //   listOne.setAttribute("class", "list-1");


  //   const saveEl = document.createElement('div');
  //   saveEl.setAttribute("class", 'material-icons');
  //   saveEl.setAttribute("id",`${indexS}`)
  //   saveEl.classList.add("save-icon")
  //   saveEl.textContent = 'save'


  //   const deleteEl = document.createElement('delete-1')
  //   deleteEl.setAttribute("class",'material-icons' )
  //   deleteEl.setAttribute("id", `${indexS}`)
  //   deleteEl.classList.add('cancel-icon')
  //   deleteEl.textContent = 'highlight_off'


  //   const modifyEl = document.createElement('modify-1')
  //   modifyEl.setAttribute("class", 'material-icons')
  //   modifyEl.setAttribute('id', `${indexS}`)
  //   modifyEl.classList.add('modify-icon')
  //   modifyEl.textContent = 'note_alt'

  //   const checkEl = document.createElement('check-1')
  //   checkEl.setAttribute("class", 'material-icons')
  //   checkEl.setAttribute("id",`${indexS}`)
  //   checkEl.classList.add('check-icon')
  //   checkEl.textContent = 'check'
  //   checkEl.style.display = "none";

  //  const thisYear = document.createElement('div');
  //  thisYear.setAttribute("class","this-year-1");
  //  thisYear.textContent = new Date().toLocaleTimeString();
  
  //   commonEl.appendChild(listOne)
  //   commonEl.appendChild(thisYear)
  //   commonEl.appendChild(saveEl)
  //   commonEl.appendChild(deleteEl)
  //   commonEl.appendChild(checkEl)
  //   commonEl.appendChild(modifyEl)

  //   workEl.insertBefore(commonEl, workEl.lastElementChild)
    
    // text 넣은 후 입력 코드

    // const newChild = document.createElement('div')
    // newChild.setAttribute("id",`${indexS}`)
    // newChild.appendChild(document.createTextNode(schListEl.value))
    // // `${indexS}.   ` 
    // listOne.insertBefore(newChild, listOne.lastElementChild)
  
    // schListEl.value = ''

    

    //delete
    // deleteEl.addEventListener('click',function(){
    //   s -= 1;
    //   workEl.removeChild(commonEl)
    //   delete localStorage.removeItem(indexS)
    //   }
    // )

    // allKillEl.addEventListener('click',function(){
    //   s = 0;
    //   localStorage.clear()
    //   commonEl.remove()
    // })



    //save
    // saveEl.addEventListener('click',function() {
    //   localStorage.setItem(indexS, listOne.textContent)
    //    }
    //  )

//      allSaveEl.addEventListener('click',function(){
//       localStorage.setItem(indexS, listOne.textContent)
//      })


//     //modify
//     modifyEl.addEventListener('click', function() {
//       if(listOne.textContent){
//         const newInput = document.createElement('input')
//         newInput.setAttribute("type","text")
//         newInput.setAttribute("id", `${indexS}`)
//         newInput.setAttribute("class","newinput")
//         listOne.insertBefore(newInput, listOne.lastElementChild)  
//         newInput.value = listOne.textContent
//         listOne.removeChild(listOne.lastElementChild)
//         }
//       }
//     )
//       // modify & check change
//     var isClick = false;
//     function toggleClick() {
//       isClick = !isClick;
//       if (isClick){
//         modifyEl.style.display = "none";
//         checkEl.style.display = "block";
//       }  
//       else{
//         modifyEl.style.display = "block";
//         checkEl.style.display = "none";
//       }
//   }
//       modifyEl.addEventListener('click', toggleClick)
//       checkEl.addEventListener('click', toggleClick)

//       // check
//       checkEl.addEventListener('click',function() {
//       const reWriteInput = document.querySelector('.newinput');
//       const newReWrite = document.createElement('div')
          
//       newReWrite.appendChild(document.createTextNode(reWriteInput.value))
//       listOne.insertBefore(newReWrite, listOne.lastElementChild)
//       listOne.removeChild(listOne.lastElementChild)    
//       localStorage.setItem(indexS,listOne.textContent)
//       thisYear.textContent = new Date().toLocaleTimeString();
//       }
//     )
    
//     // 더보기 기능
//     if(workEl.childElementCount > 6){
//       realMoreEl.style.display="block"
//       realMoreEl.style.width="45px"
//       commonEl.style.display='none'
    
//       realMoreEl.before(commonEl)
      
//       realMoreEl.addEventListener("click", function () {
//         realMoreEl.style.display="none";
//         commonEl.style.display=""
//       })
      
//     }


    
//     // function getScrollPercentage(){
//     //   return (window.scrollY + window.innerHeight)/
//     //   document.body.clientHeight * 100
//     // }
    
//     // getScrollPercentage();
    
//     // document.addEventListener('scroll',function(){
//     //   const currentScrollPerentage = getScrollPercentage();
//     //   if (currentScrollPerentage  > 150 && `${indexS}`< (s-4)){
//     //     console.log(`${indexS}`)
//     //     document.getElementById(`${indexS}`).style.display = 'none'
//     //     moreEl.style.display = 'block'
//     //     }
//     //   }
//     // )
//   }

// }
// )

// allKillEl.addEventListener('click',function(){
//   s = 0;
//   localStorage.clear()
//   commonEl.remove()
// })


if(true){
  for( var i = 1; i <= localStorage.length; i++){
    const indexS = `${i}`;

    const commonEl = document.createElement('div');
    commonEl.setAttribute("class", "commonlist");
    commonEl.setAttribute("id", `${indexS}`)


    const listOne = document.createElement('div');
    listOne.setAttribute("id",`${indexS}`)
    listOne.setAttribute("class", "list-1");


    const saveEl = document.createElement('div');
    saveEl.setAttribute("class", 'material-icons');
    saveEl.setAttribute("id",`${indexS}`)
    saveEl.classList.add("save-icon")
    saveEl.textContent = 'save'


    const deleteEl = document.createElement('delete-1')
    deleteEl.setAttribute("class",'material-icons' )
    deleteEl.setAttribute("id", `${indexS}`)
    deleteEl.classList.add('cancel-icon')
    deleteEl.textContent = 'highlight_off'


    const modifyEl = document.createElement('modify-1')
    modifyEl.setAttribute("class", 'material-icons')
    modifyEl.setAttribute('id', `${indexS}`)
    modifyEl.classList.add('modify-icon')
    modifyEl.textContent = 'note_alt'

    const checkEl = document.createElement('check-1')
    checkEl.setAttribute("class", 'material-icons')
    checkEl.setAttribute("id",`${indexS}`)
    checkEl.classList.add('check-icon')
    checkEl.textContent = 'check'
    checkEl.style.display = "none";

  //  const thisYear = document.createElement('div');
  //  thisYear.setAttribute("class","this-year-1");
  //  thisYear.textContent = new Date().toLocaleTimeString();
  
    commonEl.appendChild(listOne)
    // commonEl.appendChild(thisYear)
    commonEl.appendChild(saveEl)
    commonEl.appendChild(deleteEl)
    commonEl.appendChild(checkEl)
    commonEl.appendChild(modifyEl)

    workEl.insertBefore(commonEl, workEl.lastElementChild)


    const newChild = document.createElement('div')
    newChild.setAttribute("id",`${indexS}`)
    newChild.appendChild(document.createTextNode(localStorage.getItem(`${i}`)))
    // `${indexS}.   ` 
    listOne.insertBefore(newChild, listOne.lastElementChild)
  
    schListEl.value = ''




    // delete
    deleteEl.addEventListener('click',function(){
      i -= 1;
      workEl.removeChild(commonEl)
      delete localStorage.removeItem(`${indexS}`)
      }
    )

    allKillEl.addEventListener('click',function(){
      i = 1;
      localStorage.clear()
      commonEl.remove()
    })



    // save
    saveEl.addEventListener('click',function() {
      localStorage.setItem(`${indexS}`, listOne.textContent)
       }
     )

     allSaveEl.addEventListener('click',function(){
      localStorage.setItem(`${indexS}`, listOne.textContent)
     })


    //modify
    modifyEl.addEventListener('click', function() {
      if(listOne.textContent){
        const newInput = document.createElement('input')
        newInput.setAttribute("type","text")
        newInput.setAttribute("id", `${indexS}`)
        newInput.setAttribute("class","newinput")
        listOne.insertBefore(newInput, listOne.lastElementChild)  
        newInput.value = listOne.textContent
        listOne.removeChild(listOne.lastElementChild)
        }
      }
    )
      // modify & check change
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

      // check
      checkEl.addEventListener('click',function() {
      const reWriteInput = document.querySelector('.newinput');
      const newReWrite = document.createElement('div')
          
      newReWrite.appendChild(document.createTextNode(reWriteInput.value))
      listOne.insertBefore(newReWrite, listOne.lastElementChild)
      listOne.removeChild(listOne.lastElementChild)    
      localStorage.setItem(indexS,listOne.textContent)
      // thisYear.textContent = new Date().toLocaleTimeString();
      }
    )
    
    // 더보기 기능
    if(workEl.childElementCount > 5){
      realMoreEl.style.display="block"
      realMoreEl.style.width="45px"
      commonEl.style.display='none'
    
      realMoreEl.before(commonEl)
      
      realMoreEl.addEventListener("click", function () {
        realMoreEl.style.display="none";
        commonEl.style.display=""
      })
      
    }

  }
}