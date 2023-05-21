document.addEventListener('keydown', function (event) {
   if (event.keyCode === 32) { // 32 - код клавиши пробела
      event.preventDefault(); // отменяем действие по умолчанию
   }
});