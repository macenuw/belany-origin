import 'jquery';
const example = require('./plugins/example');

window.addEventListener("DOMContentLoaded", () => {
  example();
})

const menuBtn = document.querySelector('.header__btn');
console.log(menuBtn);
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active')
})