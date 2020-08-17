const btn = document.querySelector('#menu-btn');
const fill = document.querySelector('#menu-fill');
const menuContainer = document.querySelector('#menu-container');
const menu = document.querySelector('#menu');

btn.addEventListener("click", function (e) {
    menuContainer.style.visibility = 'visible';
    menu.style.animation = 'stretch 1s'
});

fill.addEventListener("click", function (e) {
    menu.style.animation = ''
    menuContainer.style.visibility = 'hidden';
});