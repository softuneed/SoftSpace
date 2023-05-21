const elem = document.querySelectorAll('.list__item--wrapper #listItem');
for (i = 0; i < elem.length; i++) {
   elem[i].onclick = funcShow;
}

function funcShow() {
   this.classList.toggle('list__item--minus')
}


const listItemPrimary = document.getElementById('listItemPrimary');
listItemPrimary.addEventListener('click', () => {
   listItemPrimary.classList.toggle('list__item--plus');
})