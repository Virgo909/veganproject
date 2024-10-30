/*Hiệu ứng ẩn hiện*/

let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}
let menu = document.querySelector('.menu');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}