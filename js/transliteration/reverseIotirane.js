// js/transliteration/reverseIotirane.js

/**
 * Obrnuta mapa iotiranih slova (Glagoljica → latinica):
 *   Ⱑ → ja, Ⰶ → je, Ⰹ → ji, Ⰾ → jo, Ⱃ → ju
 */
const reverseIotiraneMap = {
  '\u2C21': 'ja', // Ⱑ
  '\u2C06': 'je', // Ⰶ
  '\u2C09': 'ji', // Ⰹ
  '\u2C0E': 'jo', // Ⰾ
  '\u2C13': 'ju'  // Ⱃ
};

/**
 * Regex hvata iotirani znak (Ⱑ,Ⰶ,Ⰹ,Ⰾ,Ⱃ) samo:
 *  - na granici riječi (\b), ili
 *  - odmah nakon glagoljičnog samoglasnika ([Ⰰ-ⱟ])
 */
const contextRe = /(\b|[Ⰰ-ⱟ])([ⰡⰆⰉⰎⰓ])/g;

export function reverseIotirane(text) {
  return text.replace(contextRe, (_, prefix, glaChar) => {
    // Ako je u mapi, vrati "ja"/"je"/…; inače ostavi nepromijenjeno
    const latinDigraph = reverseIotiraneMap[glaChar] || glaChar;
    return prefix + latinDigraph;
  });
}
