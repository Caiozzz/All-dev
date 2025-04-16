const buttonHighlight = document.querySelector('#button-highlight');

function addHighlight() {
   const codeArea = document.querySelector('#codeArea');
   const code = codeArea.textContent;
   const language = document.querySelector('[data-language]').value;

   codeArea.innerHTML = `<code class="code hljs language-${language}" contenteditable="true"></code>`;

   codeArea.querySelector('code').textContent = code;

   hljs.highlightElement(codeArea.querySelector('code'));
   
}

buttonHighlight.addEventListener('click', addHighlight);
