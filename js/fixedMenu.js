window.onscroll = function showHeader() {
   var header = document.querySelector ('.navbar');

   if(window.pageYOffset > 1) {
      header.classList.add('navbar_scrolled');
   }
   else header.classList.remove('navbar_scrolled');

   // появление ту старт баттон

   var start = document.querySelector('.to-start');

   if(window.pageYOffset > 2) {
      start.classList.add('to__start-visible');
   }
   else start.classList.remove('to__start-visible');

}