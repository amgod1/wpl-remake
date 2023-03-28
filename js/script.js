const burger = document.querySelector('.aside-burger')
const burgerButton = document.querySelector('.burger')

burgerButton.addEventListener('click',() => {
  // document.querySelector('.app').addEventListener('click',() => {
  //   burger.classList.remove('visible')
  // })
  burger.classList.toggle('visible')
})

