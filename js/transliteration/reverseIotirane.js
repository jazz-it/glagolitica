// js/transliteration/reverseIotirane.js

/**
 * Obrnuta mapa iotiranih slova:
 * Glagoljični znak → latinični par (JA, JE, JI, JO, JU)
 */
const reverseIotiraneMap = {
  '\u2C21': 'JA',  // Ⱑ → JA
  '\u2C06': 'JE',  // Ⰶ → JE
  '\u2C09': 'JI',  // Ⰹ → JI
  '\u2C0E': 'JO',  // Ⰾ → JO
  '\u2C13': 'JU'   // Ⱃ → JU
};

// Build regex pattern matching all iotirani glagoljični znakovi
const pattern = new RegExp(
  Object.keys(reverseIotiraneMap).join('|'),
  'g'
);

/**
 * Zamijeni sve glagoljične iotirane znakove
 * natrag u latinične parove (JA, JE, …).
 */
export function reverseIotirane(text) {
  return text.replace(pattern, match =>
    reverseIotiraneMap[match] || match
  );
}
