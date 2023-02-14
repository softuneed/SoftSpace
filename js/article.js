const more = document.querySelectorAll('.article__text');

for(i=0;i<more.length;i++){
   more[i].onclick = funcOpen;
}
function funcOpen(){
   this.classList.toggle('article__text--full')
}
