// js/transliteration/reverseIotirane.js

/**
 * Obrnuta mapa iotiranih znakova:
 *   Ⱑ → ja, Ⰶ → je, Ⰹ → ji, Ⰾ → jo, Ⱃ → ju
 */
const reverseIotiraneMap = {
  '\u2C21': 'ja',  // Ⱑ
  '\u2C06': 'je',  // Ⰶ
  '\u2C09': 'ji',  // Ⰹ
  '\u2C0E': 'jo',  // Ⰾ
  '\u2C13': 'ju'   // Ⱃ
};

/**
 * Regex hvata iotirani znak (Ⱑ,Ⰶ,Ⰹ,Ⰾ,Ⱃ) samo:
 *  - na početku stringa, ili
 *  - nakon razmaka/punktuacije (space . , ! ? ; : - – — ( ) ' " …)
 *  - prefix je početak teksta ili bilo koji space/punkt, 
 *  - a slijedi iotirani znak Ⱑ Ⰶ Ⰹ Ⰾ Ⱃ
 */
const contextRe = /(^|[\s.,!?;:\-–—()[\]'" ])([ⰡⰆⰉⰎⰓ])/g;

export function reverseIotirane(text) {
  return text.replace(contextRe, (_, prefix, glaChar) => {
    // Ako vrijedi mapiranje, vrati "ja"/"je"/…, inače samo originalni znak
    const latin = reverseIotiraneMap[glaChar] || glaChar;
    return prefix + latin;
  });
}
