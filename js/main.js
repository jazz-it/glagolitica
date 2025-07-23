import { transliterateOsnovnaSlova } from './transliteration/osnovnaSlova.js';
import { transliterateDigrafi }    from './transliteration/digrafi.js';
import { transliterateDiakritici } from './transliteration/diakritici.js';
import { transliterateArhaicni }   from './transliteration/arhaicniGrafemi.js';
import { transliterateLexical }    from './transliteration/lexicalExceptions.js';
import { transliterateIotirane } from './transliteration/iotirane.js';

const inputEl  = document.getElementById('input-text');
const outputEl = document.getElementById('output-text');
const swapBtn  = document.getElementById('swap-btn');
const themeBtn = document.getElementById('theme-toggle');
const htmlRoot = document.documentElement;

// Primarni transliteracijski pipeline
function translate(text) {
  let result = text;
  result = transliterateLexical(result);
  result = transliterateArhaicni(result);
  result = transliterateDiakritici(result);
  result = transliterateIotirane(result);
  result = transliterateDigrafi(result);
  result = transliterateOsnovnaSlova(result);
  return result;
}

// Događaji
inputEl.addEventListener('input', () => {
  outputEl.value = translate(inputEl.value);
});

swapBtn.addEventListener('click', () => {
  const fromLabel = document.querySelector('label[for="input-text"]');
  const toLabel   = document.querySelector('label[for="output-text"]');
  [fromLabel.textContent, toLabel.textContent] =
    [toLabel.textContent, fromLabel.textContent];
  [inputEl.value, outputEl.value] =
    [outputEl.value, inputEl.value];
  inputEl.focus();
});

themeBtn.addEventListener('click', () => {
  htmlRoot.dataset.theme =
    htmlRoot.dataset.theme === 'light' ? 'dark' : 'light';
});
