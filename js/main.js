const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
   delay: (index+1)*.6,
   opacity: 1
  })
})

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();