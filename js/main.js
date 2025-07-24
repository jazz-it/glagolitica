// js/main.js

import { transliterateOsnovnaSlova }   from './transliteration/osnovnaSlova.js';
import { transliterateDigrafi }        from './transliteration/digrafi.js';
import { transliterateDiakritici }     from './transliteration/diakritici.js';
import { transliterateArhaicni }       from './transliteration/arhaicniGrafemi.js';
import { transliterateLexical }        from './transliteration/lexicalExceptions.js';
import { transliterateIotirane }       from './transliteration/iotirane.js';

import { reverseOsnovnaSlova }         from './transliteration/reverseOsnovnaSlova.js';
import { reverseDigrafi }              from './transliteration/reverseDigrafi.js';
import { reverseDiakritici }           from './transliteration/reverseDiakritici.js';
import { reverseArhaicniGrafemi }      from './transliteration/reverseArhaicniGrafemi.js';
import { reverseLexicalExceptions }    from './transliteration/reverseLexicalExceptions.js';
import { reverseIotirane }             from './transliteration/reverseIotirane.js';

const inputEl   = document.getElementById('input-text');
const outputEl  = document.getElementById('output-text');
const swapBtn   = document.getElementById('swap-btn');
const themeBtn  = document.getElementById('theme-toggle');
const htmlRoot  = document.documentElement;

// Flag that tracks current direction: false = latinica→glagoljica, true = glagoljica→latinica
let isReverse = false;
console.log('⚡ AQQB');

/**
 * Forward pipeline: Latinica → Glagoljica
 */
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

/**
 * Reverse pipeline: Glagoljica → Latinica
 */
function reverseTranslate(text) {
  let result = text;
  result = reverseLexicalExceptions(result);
  result = reverseIotirane(result);
  result = reverseDiakritici(result);
  result = reverseDigrafi(result);
  result = reverseOsnovnaSlova(result);
  result = reverseArhaicniGrafemi(result);

  // → normalize to sentence-case: prvi znak velik, ostalo malo
  result = result.toLowerCase();
  result = result.replace(
    /(^\s*[a-z])/,            // pronađi prvo slovo (nakon eventualnih space‐eva)
    match => match.toUpperCase()
  );

  return result;
}

/**
 * Render output based on current direction flag.
 */
function render() {
  const fn = isReverse ? reverseTranslate : translate;
  outputEl.value = fn(inputEl.value);
}

// Input event: uvijek koristi odgovarajući pipeline
inputEl.addEventListener('input', render);

// Swap button: mijenja smjer i zamjenjuje sadržaje & labele
swapBtn.addEventListener('click', () => {
  isReverse = !isReverse;

  // swap vrijednosti
  [ inputEl.value, outputEl.value ] = [ outputEl.value, inputEl.value ];
  
  // swap labele
  const fromLabel = document.querySelector('label[for="input-text"]');
  const toLabel   = document.querySelector('label[for="output-text"]');
  [ fromLabel.textContent, toLabel.textContent ] =
    [ toLabel.textContent, fromLabel.textContent ];

  inputEl.focus();
});

// Theme toggle
themeBtn.addEventListener('click', () => {
  htmlRoot.dataset.theme = htmlRoot.dataset.theme === 'light'
    ? 'dark'
    : 'light';
});

// Inicijalno renderiranje (kada se stranica učita)
render();
// expose for console debugging
window.translate         = translate;
window.reverseTranslate  = reverseTranslate;
