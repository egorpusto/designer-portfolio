const header = document.querySelector(".header")
const menu = header.querySelector(".menu")
const menuIcon = header.querySelector(".menu__icon")

menu.addEventListener('click', function () {
    header.classList.toggle('header--mobile');

    if (header.classList.contains('header--mobile')) {
        menuIcon.src = "./images/close.svg"
    } else {
        menuIcon.src = "./images/menu.svg"
    }
})