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

// prvo zasebna riječ "Ⰶ" → "je", ostali iotirani znakovi odmah
const standaloneJeRe = /(^|[\s.,!?;:'"()])Ⰶ(?=[\s.,!?;:'"()]|$)/g;
const anyIotiraniRe  = /[ⰡⰉⰎⰓ]/g;

export function reverseIotirane(text) {
  // 1) "Ⰶ" kao zasebna riječ postaje "je"
  text = text.replace(standaloneJeRe, (_, pre) => pre + 'je');

  // 2) ostali iotirani znakovi Ⱑ,Ⰹ,Ⰾ,Ⱃ → ja, ji, jo, ju
  return text.replace(anyIotiraniRe, gla =>
    reverseIotiraneMap[gla] || gla
  );
}
