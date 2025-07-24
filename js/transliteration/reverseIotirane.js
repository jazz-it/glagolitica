// js/transliteration/reverseIotirane.js

/**
 * Obrnuta mapa iotiranih slova (Glagoljica → LATINICA)
 * mapira svaki glagoljični znak na odgovarajući par:
 *   Ⱑ→JA, Ⰶ→JE, Ⰹ→JI, Ⰾ→JO, Ⱃ→JU
 */
const reverseIotiraneMap = {
  '\u2C21': 'JA',  // Ⱑ
  '\u2C06': 'JE',  // Ⰶ
  '\u2C09': 'JI',  // Ⰹ
  '\u2C0E': 'JO',  // Ⰾ
  '\u2C13': 'JU'   // Ⱃ
};

/**
 * Regex hvata:
 * 1) prefix koji je ili
 *    - granica riječi (\b), ili
 *    - glagoljični samoglasnik (Ⰰ–Ⰵ, Ⰸ–Ⰿ, Ⱁ–Ⱆ, Ⱈ–ⱏ, ⱑ–ⱟ)
 * 2) pa po redu iotirani znak
 */
const pattern = /(\b|[Ⰰ-\u2C5F])([ⰡⰆⰉⰎⰓ])/g;

/**
 * Zamijeni samo one iotirane znakove koji stoje na početku riječi
 * ili iza glagoljičnog samoglasnika. Ostali Ⱑ,Ⰶ… puste nepromijenjene.
 * 
 * Rezultat se vraća u *lowercase* – na kraju ga rounded-casom kodiramo
 * u main.js (sentence-case).
 */
export function reverseIotirane(text) {
  return text.replace(pattern, (_, prefix, gla) => {
    const pair = reverseIotiraneMap[gla] || gla;
    return prefix + pair.toLowerCase();
  });
}
