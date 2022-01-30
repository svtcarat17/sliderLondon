const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const countSlide = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')
let activeIndex = 0

sidebar.style.top = `-${(countSlide-1) * 100}vh`

upBtn.addEventListener('click', function() {
    changeSlider('up')
})
downBtn.addEventListener('click', function() {
    changeSlider('down')
})

document.addEventListener('keydown', event =>{
  if(event.key === 'ArrowUp'){
    changeSlider('up')
  } else if (event.key === 'ArrowDown'){
    changeSlider('down')
  }
})

function changeSlider(direction) {
   if (direction === 'up'){
       activeIndex++;
       if (activeIndex === countSlide) {
        activeIndex = 0
       }
    } else if (direction === 'down'){
      activeIndex--;
      if(activeIndex < 0 ){
        activeIndex = countSlide - 1
      }
   }
   let height = container.clientHeight
   mainSlide.style.transform = `translateY(-${activeIndex * height}px)`
   sidebar.style.transform = `translateY(${activeIndex * height}px)`
}