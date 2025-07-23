// js/transliteration/reverseDigrafi.js

/**
 * Obrnuta mapa digrafa:
 * Glagoljični niz → latinični digraf/trigraf
 *
 * Pretpostavka: u digrafi.js izvezli smo
 *     export const digrafMap = { … }
 * pa ga ovdje ponovno uvozimo i invertiramo.
 */
import { digrafMap } from './digrafi.js';

const reverseDigrafMap = Object.fromEntries(
  Object.entries(digrafMap).map(([lat, gla]) => [gla, lat])
);

// Sortiramo po duljini (dulji nizovi prvo) kako bismo
// osigurali da se dvojni znakovi (npr. ⰄⰆ) zamijene prije pojedinačnih
const pattern = new RegExp(
  Object.keys(reverseDigrafMap)
    .sort((a, b) => b.length - a.length)
    .join('|'),
  'g'
);

/**
 * Zamijeni sve glagoljične digrafe natrag u latinične:
 * DŽ, LJ, NJ i njihove varijante velikih/malih slova.
 */
export function reverseDigrafi(text) {
  return text.replace(pattern, match =>
    reverseDigrafMap[match] || match
  );
}
