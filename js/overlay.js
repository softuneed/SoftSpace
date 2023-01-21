const overlay = document.querySelector('.more__overlay');
const infoMore = document.querySelector('.info__more');
const bodyk = document.querySelector('.body')

window.addEventListener('click', function (event) {
   
   if (event.target.hasAttribute('data-popup')) {
      overlay.classList.add('overlay__active');
   }

   else if (event.target.hasAttribute('data-text')) {
      overlay.classList.add('overlay__active');
   }

   else if (event.target.hasAttribute('data-desc')) {
      overlay.classList.add('overlay__active');
   }

   else if (event.target.hasAttribute('data-pictures')) {
      overlay.classList.add('overlay__active');
   }

   else overlay.classList.remove('overlay__active');

});


 
