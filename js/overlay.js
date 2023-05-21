const overlay = document.querySelector('.more__overlay');
const infoMore = document.querySelectorAll('.info__more');
const bodyk = document.querySelector('.body');
const popupInfo = document.querySelectorAll('.popup__info');
const closePopupBtn = document.querySelectorAll('.closePopupBtn');

infoMore.forEach((el, index) => {
   el.addEventListener('click', () => {
      overlay.classList.add('overlay__active');
      bodyk.classList.add('stopscroll');
      popupInfo[index].classList.add('popup__info--active');
   });
});

closePopupBtn.forEach((el, index) => {
   el.addEventListener('click', () => {
      overlay.classList.remove('overlay__active');
      bodyk.classList.remove('stopscroll');
      popupInfo[index].classList.remove('popup__info--active');
   });
});
