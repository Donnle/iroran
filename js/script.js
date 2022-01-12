const burger = document.querySelector('.header-burger')
const menuList = document.querySelector('.menu-list')

burger.addEventListener('click', () => {
   menuList.classList.toggle('active')
})