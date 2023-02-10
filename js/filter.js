const filterBox = document.querySelectorAll('.programs__item');

document.querySelector('.nav__category').addEventListener('click', event => {
   if (event.target.tagName !== 'LI') return false;

   let filterClss = event.target.dataset['f'];
   
   filterBox.forEach (elem => {
      elem.classList.remove('hide');
      if (!elem.classList.contains(filterClss)) {
         elem.classList.add('hide');
         items += 40;
         const array = Array.from(document.querySelector('.programs__content').children);
         const visItems = array.slice(0, items);
         visItems.forEach(el => el.classList.add('is-visible'));
      }
   });
});