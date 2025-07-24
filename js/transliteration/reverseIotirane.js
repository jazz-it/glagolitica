// js/transliteration/reverseIotirane.js

/**
 * Obrnuta mapa iotiranih znakova:
 *   Ⱑ → ja, Ⰶ → je, Ⰹ → ji, Ⰾ → jo, Ⱃ → ju
 */
const reverseIotiraneMap = {
  '\u2C21': 'ja', // Ⱑ
  '\u2C06': 'je', // Ⰶ
  '\u2C09': 'ji', // Ⰹ
  '\u2C0E': 'jo', // Ⰾ
  '\u2C13': 'ju'  // Ⱃ
};

// Umjesto kompliciranih konteksta, zamijeni sve iotirane znakove odmah
const anyIotiraniRe = /[ⰡⰆⰉⰎⰓ]/g;

export function reverseIotirane(text) {
  return text.replace(anyIotiraniRe, gla => 
    // Ⱑ,Ⰶ,… → ja, je, … prije svih arhaičnih
    reverseIotiraneMap[gla] || gla
  );
}
