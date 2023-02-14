const map = document.querySelector('.map__list__item--main');
const dropdown = document.querySelector('.map__list__item--secondary');
const progs = document.querySelector('.map__list__item__secondary__programming--items');
const progsBtn = document.querySelector('.map__list__item__secondary__programming--text');
const system = document.querySelector('.map__list__item__secondary__system--items');
const systemBtn = document.querySelector('.map__list__item__secondary__system--text');
const wallpapers = document.querySelector('.map__list__item__secondary__wallpapers--items');
const wallpapersBtn = document.querySelector('.map__list__item__secondary__wallpaper--text');
const icons = document.querySelector('.map__list__item__secondary__icons--items');
const iconsBtn = document.querySelector('.map__list__item__secondary__icons--text');
const guide = document.querySelector('.map__list__item__secondary__guide--items');
const guideBtn = document.querySelector('.map__list__item__secondary__guide--text');
const articles = document.querySelector('.map__list__item__secondary__articles--items');
const articlesBtn = document.querySelector('.map__list__item__secondary__articles--text');

map.addEventListener('click', () => {
   dropdown.classList.toggle('map__list__item__secondary--visible');
});

progsBtn.addEventListener('click', () => {
   progs.classList.toggle('active__lists');
});

systemBtn.addEventListener('click', () => {
   system.classList.toggle('active__lists');
});

wallpapersBtn.addEventListener('click', () => {
   wallpapers.classList.toggle('active__lists');
});

iconsBtn.addEventListener('click', () => {
   icons.classList.toggle('active__lists');
});

guideBtn.addEventListener('click', () => {
   guide.classList.toggle('active__lists');
});

articlesBtn.addEventListener('click', () => {
   articles.classList.toggle('active__lists');
});