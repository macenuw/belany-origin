import 'jquery';
const example = require('./plugins/example');

window.addEventListener("DOMContentLoaded", () => {
  example();
})

const menuBtn = document.querySelector('.header__btn');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active')
})


const searchBtn = document.querySelector('#searchBtn');
const searchClose = document.querySelector('#searchClose');
const search = document.querySelector('.search')

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('active');
  search.classList.toggle('active');
})
searchClose.addEventListener('click', () => {
  searchBtn.classList.toggle('active');
  search.classList.toggle('active');
})