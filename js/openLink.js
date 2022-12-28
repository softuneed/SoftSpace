window.addEventListener('click', function (event) {

   if (event.target.hasAttribute('data-search')) {
      items += 7;
      const array = Array.from(document.querySelector('.programs__content').children);
      const visItems = array.slice(0, items);

      visItems.forEach(el => el.classList.add('is-visible'));

      if (visItems.length === productsLength) {
         showMore.style.display = 'none';
      }
  
   } 

});

   


