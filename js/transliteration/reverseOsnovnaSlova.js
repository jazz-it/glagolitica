// js/transliteration/reverseOsnovnaSlova.js

/**
 * Obrnuta mapa osnovnih slova:
 * Glagoljični znak → odgovarajuće latinično slovo
 *
 * Pretpostavka: u osnovnaSlova.js izvezli smo
 *     export const osnovnaMap = { … }
 * pa ga ovdje ponovo uvozimo i invertiramo.
 */
import { osnovnaMap } from './osnovnaSlova.js';

const reverseOsnovnaMap = Object.fromEntries(
  Object.entries(osnovnaMap)
    .map(([lat, gla]) => [gla, lat])
);

const pattern = new RegExp(
  Object.keys(reverseOsnovnaMap).join('|'),
  'g'
);

/**
 * Zamijeni svaki glagoljični znak prema obrnutom mapiranju.
 */
export function reverseOsnovnaSlova(text) {
  return text.replace(pattern, match =>
    reverseOsnovnaMap[match] || match
  );
}
