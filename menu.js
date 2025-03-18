const menuButton = document.getElementById('menu-button');
const menu = document.querySelector('.main-menu');
let menuClosed = true;

menuButton.onclick = () => {
   if (menuClosed) {
      menu.style.display = 'initial';
      menuButton.querySelector('img').setAttribute('src', './img/icon-menu-close.svg');
      menuClosed = false;
   } else {
      menu.style.display = 'none';
      menuButton.querySelector('img').setAttribute('src', './img/icon-menu.svg');
      menuClosed = true;
   }
}
