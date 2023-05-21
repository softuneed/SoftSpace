const stopScroll = document.querySelector('.info__more');
const bodyyy = document.querySelector('.body');
const popup = document.querySelector('.popup__info');

window.addEventListener('click', function (event) {

   if (event.target.hasAttribute('data-link')) {
      bodyyy.classList.add('stopscroll');
   } else if (event.target.hasAttribute('data-popup')) {
      bodyyy.classList.add('stopscroll');
   } else if (event.target.hasAttribute('data-text')) {
      bodyyy.classList.add('stopscroll');
   } else if (event.target.hasAttribute('data-pictures')) {
      bodyyy.classList.add('stopscroll');
   } else if (event.target.hasAttribute('data-desc')) {
      bodyyy.classList.add('stopscroll');
   } else bodyyy.classList.remove('stopscroll');

});