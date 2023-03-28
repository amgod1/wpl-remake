const burger = document.querySelector('.aside-burger')
const burgerButton = document.querySelector('.burger')
const closeBurgerButton = document.querySelector('.close-burger')

burgerButton.addEventListener('click',() => {
  burger.classList.toggle('visible')
})

document.addEventListener('click', (event) => {
  if (!burger.contains(event.target) && !burgerButton.contains(event.target)) {
    burger.classList.remove('visible');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 976 && burger.classList.contains('visible')) {
    burger.classList.remove('visible');
  }
})

closeBurgerButton.addEventListener('click', () => {
  burger.classList.remove('visible');
})