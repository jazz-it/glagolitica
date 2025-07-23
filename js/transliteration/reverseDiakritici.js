// js/transliteration/reverseDiakritici.js

/**
 * Obrnuta mapa dijakritičkih znakova:
 * Glagoljični znak → latinični znak s dijakritikom
 *
 * Pretpostavka: u diakritici.js izvezli smo
 *     export const diakriticiMap = { … }
 * pa ga ovdje ponovno uvozimo i invertiramo.
 */
import { diakriticiMap } from './diakritici.js';

const reverseDiakriticiMap = Object.fromEntries(
  Object.entries(diakriticiMap)
    .map(([lat, gla]) => [gla, lat])
);

// Iako su većina dijakritičkih zamjena jednoga znaka,
// sortiranje po duljini ključeva osigurava ispravno mapiranje
const pattern = new RegExp(
  Object.keys(reverseDiakriticiMap)
    .sort((a, b) => b.length - a.length)
    .join('|'),
  'g'
);

/**
 * Zamijeni sve glagoljične znakove iz dijakriticiMap
 * natrag u latinične znakove s dijakritikom.
 */
export function reverseDiakritici(text) {
  return text.replace(pattern, match =>
    reverseDiakriticiMap[match] || match
  );
}
