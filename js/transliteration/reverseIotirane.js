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

export function reverseIotirane(text) {
  // 1) iotirani znakovi na početku riječi (nakon razmaka/punkta ili početka teksta)
  text = text.replace(
    /(^|[\s.,!?;:\-–—()[\]"'])([ⰡⰆⰉⰎⰓ])/g,
    (_, pre, gla) => pre + (reverseIotiraneMap[gla] || gla)
  );

  // 2) iotirani znakovi odmah nakon glagoljičnog samoglasnika
  text = text.replace(
    /([\u2C00-\u2C05\u2C08-\u2C0D\u2C11-\u2C16])([ⰡⰆⰉⰎⰓ])/g,
    (_, vow, gla) => vow + (reverseIotiraneMap[gla] || gla)
  );

  return text;
}
