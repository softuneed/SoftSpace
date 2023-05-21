const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.programs__item').length;
let items = 6;

showMore.addEventListener('click', () => {
   items += 6;
   const array = Array.from(document.querySelector('.programs__content').children);
   const visItems = array.slice(0, items);

   visItems.forEach(el => el.classList.add('is-visible'));
});