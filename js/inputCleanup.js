const searchlistContainer = document.querySelector('.searchlist__container');
const body = document.body;
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const searchAnchor = document.querySelector('.search--anchor');
const searchForm = document.querySelector('search__form')

main.addEventListener('click', () => {
   searchlistContainer.classList.add('hide');
});

footer.addEventListener('click', () => {
   searchlistContainer.classList.add('hide');
});

header.addEventListener('click', function (event) {

   if (event.target.hasAttribute('data-search')) {
      document.getElementById("filter-input").value = "";
      searchlistContainer.classList.remove('hide')
   }

   searchlistContainer.classList.remove('hide');

   if (event.target.hasAttribute('data-formsearch')) {
      searchlistContainer.classList.remove('hide')
   }
});