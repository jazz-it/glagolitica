// js/transliteration/reverseLexicalExceptions.js

/**
 * Obrnuta mapa leksičkih izuzetaka:
 * Glagoljična sekvenca → originalna latinična riječ
 *
 * Pretpostavka: u lexicalExceptions.js izvezli smo
 *     export const lexicalMap = { … }
 * pa ga ovdje ponovno uvozimo i invertiramo.
 */
import { lexicalMap } from './lexicalExceptions.js';

const reverseLexicalMap = Object.fromEntries(
  Object.entries(lexicalMap).map(([lat, gla]) => [gla, lat])
);

// Sortiramo po duljini nizova da bismo prvo obradili duže riječi
const pattern = new RegExp(
  Object.keys(reverseLexicalMap)
    .sort((a, b) => b.length - a.length)
    .join('|'),
  'g'
);

/**
 * Zamijeni sve glagoljične izraze iz lexicalMap
 * natrag u latinične riječi prema originalnim izuzecima.
 */
export function reverseLexicalExceptions(text) {
  return text.replace(pattern, match =>
    reverseLexicalMap[match] || match
  );
}
