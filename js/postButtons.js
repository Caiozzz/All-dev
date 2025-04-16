let liked = false;
function toLike(button) {
   
   if (liked) {

      liked = false;
      button.querySelector('img').setAttribute('src', './img/icon-like.svg');
      button.querySelector('span').textContent = parseInt(button.innerText) - 1;
      return;
   }

   liked = true;
   button.querySelector('img').setAttribute('src', './img/icon-likeFill.svg');
   button.querySelector('span').textContent = parseInt(button.innerText) + 1;
}
