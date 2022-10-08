
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shopping.classList.remove('active');
  Menubtn.classList.remove('active');
}
let shopping = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
  shopping.classList.toggle('active');
  searchForm.classList.remove('active');
  Menubtn.classList.remove('active');
}

let Menubtn = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  Menubtn.classList.toggle('active');
  searchForm.classList.remove('active');
  shopping.classList.remove('active');

}

window.onscroll = () => {

  searchForm.classList.remove('active');
  shopping.classList.remove('active');
  Menubtn.classList.remove('active');
}