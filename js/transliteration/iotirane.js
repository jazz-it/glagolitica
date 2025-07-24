// js/transliteration/iotirane.js

// Sada mapiramo samo UPPERCASE ključeve
export const iotiraneMap = {
  JA: '\u2C21',  // Ⱑ
  JE: '\u2C06',  // Ⰶ
  JI: '\u2C09',  // Ⰹ
  JO: '\u2C0E',  // Ⰾ
  JU: '\u2C13'   // Ⱃ
};

// hvata 'jV' na granici riječi ili nakon samoglasnika, case-insensitive
const re = /(\b|[AEIOUaeiou])(j[AEIOUaeiou])/gi;

export function transliterateIotirane(text) {
  return text.replace(re, (_, prefix, seq) => {
    // seq može biti 'ja', 'Ja', 'jA' ili 'JA'
    const key  = seq.toUpperCase();            // npr. 'JA'
    const glag = iotiraneMap[key] || seq;      // fallback na originalni seq
    return prefix + glag;
  });
}
