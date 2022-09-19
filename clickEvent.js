let menu = document.getElementById('menu');
let side = document.getElementById('side');
let list_close = document.getElementById('nav-list__close');
let side_close = document.getElementById('side__close');

menu.addEventListener('click', function() {
    let menuNav = document.getElementById('menu-nav');
    menuNav.classList.toggle('open');
}, false);

side.addEventListener('click', function() {
    let sideColumun = document.getElementById('side-column');
    sideColumun.classList.toggle('open');
}, false);

list_close.addEventListener('click', function() {
    let menuNav = document.getElementById('menu-nav');
    menuNav.classList.toggle('open');
}, false);

side_close.addEventListener('click', function() {
    let sideColumun = document.getElementById('side-column');
    sideColumun.classList.toggle('open');
}, false);