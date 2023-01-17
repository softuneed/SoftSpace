let item = 10;
window.addEventListener('click', function (event) {

   if (event.target.hasAttribute('data-search')) {
      item += 10;
      const array = Array.from(document.querySelector('.programs__content').children);
      const visItems = array.slice(0, item);

      visItems.forEach(el => el.classList.add('is-visible'));
   } 
});