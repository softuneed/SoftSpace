const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.programs__item').length;
let items = 5;

showMore.addEventListener('click', () => {
	items += 5;
	const array = Array.from(document.querySelector('.programs__content').children);
	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.add('is-visible'));

	if (visItems.length === productsLength) {
		showMore.style.display = 'none';
	}
});