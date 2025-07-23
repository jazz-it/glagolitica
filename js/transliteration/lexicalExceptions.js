// js/transliteration/lexicalExceptions.js

/**
 * Lexical exceptions:
 * Ovo je riječnik posebnih riječi ili oblika
 * koji se ne mogu ispravno preslikati čistim
 * kontekstualnim pravilima (FST pipeline).
 * Ključevi su u *malim* slovima, bez diakritika,
 * vrijednosti su gotove glagoljične string‐zamjene.
 */
export const lexicalMap = {
  // Primjeri (popuniti stvarnim iznimkama prema potrebi):
  'djeca': 'ⰄⰹⰵⰜⰀ',    // d-j-e-c-a
  'dijete': 'ⰄⰹⰅⰕⰵ',  // d-i-j-e-t-e
  'živa': 'ⰆⰹⰂⰀ',      // ž-i-v-a  
  // 'ime': '…',
  // 'ruka': '…',
  // itd.
};

// Kompajlirani RegExp za brzu detekciju cijelih riječi
export const pattern = new RegExp(
  '\\b(' + Object.keys(lexicalMap).join('|') + ')\\b',
  'gi'
);

/**
 * Zamijeni sve točne podudarnosti riječi prema lexicalMap.
 * Ova funkcija treba pokrenuti prije ostalih slojeva transliteracije.
 */
export function transliterateLexical(text) {
  return text.replace(pattern, (match) => {
    // pronađi match u map
    const key = match.toLowerCase();
    const glag = lexicalMap[key];
    // Ako original počinje velikim slovom, kapitaliziraj prvi glagoljični znak
    if (glag && /^[A-ZŠĐŽČĆ]/.test(match[0])) {
      // prvi Unicode codepoint
      const first = glag.codePointAt(0);
      const rest  = glag.slice([...glag][0].length);
      // transformiraj na titlecase (ako postoji takav codepoint)
      const titleFirst = String.fromCodePoint(first);
      return titleFirst + rest;
    }
    return glag || match;
  });
}
