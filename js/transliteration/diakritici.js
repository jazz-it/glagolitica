// js/transliteration/diakritici.js

// Mapiramo slova koja imaju poseban glagoljični ekvivalent
export const diakriticiMap = {
  'Č': '\u2C1E',  // Ⱎ
  'č': '\u2C5E',  // ⱞ
  'Š': '\u2C1F',  // Ⱏ
  'š': '\u2C5F',  // ⱟ
  'Ž': '\u2C06',  // Ⰶ
  'ž': '\u2C36',  // ⱶ
  'Ć': '\u2C1E',  // aproximacija na Ⱎ (č)
  'ć': '\u2C5E',  // aproximacija na ⱞ (č)
  // Đ ≈ DŽ (digraf) – pošaljemo DŽ, ostatak pipeline hvata u digrafi.js
  'Đ': 'DŽ',
  'đ': 'dž'
};

export const specialPattern = new RegExp(Object.keys(diakriticiMap).join('|'), 'g');

export function transliterateDiakritici(text) {
  // 1. Zamijeni sve specijalne slučajeve
  text = text.replace(specialPattern, match => diakriticiMap[match]);

  // 2. Unicode normalizacija i uklanjanje ostalih akcenata
  //    Nakon ovoga ostaju samo osnovni latinični znakovi i već
  //    mapirani glagoljični znakovi iz diakriticiMap
  text = text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .normalize('NFC');

  return text;
}
