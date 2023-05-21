const more = document.querySelectorAll('.article__text');
const articlesItem = document.querySelectorAll('.articles__item');

for (let i = 0; i < more.length; i++) {
   more[i].addEventListener('click', () => {
      funcOpen(i);
   });
}

function funcOpen(index) {
   more[index].classList.toggle('article__text--full');
   articlesItem[index].classList.toggle('articlesItem--active');
}