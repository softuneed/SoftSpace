const over = document.querySelector('.more__overlay');


window.addEventListener('click', function (event) {

   if (event.target.hasAttribute('data-link')) {
      over.classList.add('overlay__active');
   } 

   else overlay.classList.remove('overlay__active');

});


 
