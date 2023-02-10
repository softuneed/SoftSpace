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

map.addEventListener('click', () => {
   dropdown.classList.toggle('map__list__item__secondary--visible');
});

progsBtn.addEventListener('click', () => {
   progs.classList.toggle('map__list__item__secondary__programming__items--active');
});

systemBtn.addEventListener('click', () => {
   system.classList.toggle('map__list__item__secondary__system__items--active');
});

wallpapersBtn.addEventListener('click', () => {
   wallpapers.classList.toggle('map__list__item__secondary__wallpapers__items--active');
});

iconsBtn.addEventListener('click', () => {
   icons.classList.toggle('map__list__item__secondary__icons__items--active');
});