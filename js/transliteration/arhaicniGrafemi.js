// js/transliteration/arhaicniGrafemi.js

/**
 * Arhaični grafemi u Glagoljici (izmiješteni u Unicode bloku 2C20–2C2F).
 * Ovdje mapiramo najčešće “stare” znakove koji nemaju mjesta u modernom alfabetu:
 *   yat, psi, izhe, uk, fita, shta, kso
 */

export const arhaicniMap = {
  // osnovni (malim slovima) i verzije velikih slova
  'yat':  '\u2C21',  // Ⱑ
  'YAT':  '\u2C21',
  'psi':  '\u2C22',  // Ⱒ
  'PSI':  '\u2C22',
  'izhe': '\u2C08',  // Ⰸ (izhe je u osnovnom bloku)
  'IZHE': '\u2C08',
  'uk':   '\u2C26',  // Ⱖ
  'UK':   '\u2C26',
  'fita': '\u2C23',  // Ⱓ
  'FITA': '\u2C23',
  'shta': '\u2C24',  // Ⱔ
  'SHTA': '\u2C24',
  'kso':  '\u2C27',  // Ⱗ
  'KSO':  '\u2C27'
};

// Dinamički RegExp koji hvata svaki od ključeva iz mape
export const pattern = new RegExp(Object.keys(arhaicniMap).join('|'), 'g');

/**
 * Zamijeni sve arhaične latinične grapheme u textu
 * odgovarajućim glagoljskim znakovima.
 */
export function transliterateArhaicni(text) {
  return text.replace(pattern, match => arhaicniMap[match]);
}
