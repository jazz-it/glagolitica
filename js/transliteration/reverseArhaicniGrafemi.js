// js/transliteration/reverseArhaicniGrafemi.js

/**
 * Obrnuta mapa arhaičnih grafema:
 * Glagoljični niz → latinična sekvenca
 *
 * Pretpostavka: u arhaicniGrafemi.js izvezli smo
 *     export const arhaicniMap = { … }
 * pa ga ovdje ponovno uvozimo i invertiramo.
 */
import { arhaicniMap } from './arhaicniGrafemi.js';

const reverseArhaicniMap = Object.fromEntries(
  Object.entries(arhaicniMap)
    .map(([lat, gla]) => [gla, lat])
);

// Sortiramo po duljini nizova da bismo prvo zamijenili duže sekvence
const pattern = new RegExp(
  Object.keys(reverseArhaicniMap)
    .sort((a, b) => b.length - a.length)
    .join('|'),
  'g'
);

/**
 * Zamijeni sve glagoljične arhaične grafeme
 * natrag u latinične riječi (yac, psi, izhe, uk, fita, shta, kso…).
 */
export function reverseArhaicniGrafemi(text) {
  return text.replace(pattern, match =>
    reverseArhaicniMap[match] || match
  );
}
