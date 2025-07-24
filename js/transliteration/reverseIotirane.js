// js/transliteration/reverseIotirane.js

/**
 * Obrnuta mapa iotiranih znakova:
 *   Ⱑ → ja, Ⰶ → je, Ⰹ → ji, Ⰾ → jo, Ⱃ → ju
 */
const reverseIotiraneMap = {
  '\u2C21': 'ja', // Ⱑ
  '\u2C06': 'je', // Ⰶ
  '\u2C09': 'ji', // Ⰹ
  '\u2C0E': 'jo', // Ⰾ
  '\u2C13': 'ju'  // Ⱃ
};

// 1) Na početku riječi (ispred razmaka/punkta ili samog početka stringa)
const wordStartRe = /(^|[\s.,!?;:\-–—()[\]"'])([ⰡⰆⰉⰎⰓ])/g;

// 2) Odmah nakon glagoljičnog samoglasnika (Ⰰ–Ⰵ, Ⰸ–Ⰽ, Ⱁ–Ⱆ, Ⱈ–Ⰿ)
const afterVowelRe = /([\u2C00-\u2C05\u2C08-\u2C0D\u2C11-\u2C16])([ⰡⰆⰉⰎⰓ])/g;

export function reverseIotirane(text) {
  return text
    // match 1. kontekst: početak riječi
    .replace(wordStartRe, (_, pre, gla) => {
      const lat = reverseIotiraneMap[gla] || gla;
      return pre + lat;
    })
    // match 2. kontekst: nakon glag. samoglasnika
    .replace(afterVowelRe, (_, vowel, gla) => {
      const lat = reverseIotiraneMap[gla] || gla;
      return vowel + lat;
    });
}
