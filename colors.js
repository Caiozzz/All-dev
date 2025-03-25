const inputColor = document.querySelector('.color');
const appCode = document.querySelector('.app-code');

inputColor.addEventListener('change', () => {
   appCode.style.backgroundColor = inputColor.value;
})
