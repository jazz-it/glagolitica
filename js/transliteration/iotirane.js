// js/transliteration/iotirane.js

const iotiraneMap = {
  'JA': '\u2C21',  // Ⱑ
  'JE': '\u2C06',  // Ⰶ
  'JI': '\u2C09',  // Ⰹ
  'JO': '\u2C0E',  // Ⰾ
  'JU': '\u2C13'   // Ⱃ
};

// uhvati "JA" kad stoji na početku riječi ili nakon samoglasnika
const re = /(\b|[AEIOUaeiou])J([AEIOUaeiou])/g;

export function transliterateIotirane(text) {
  return text.replace(re, (_, prefix, v) => {
    const key = 'J' + v.toUpperCase();
    // vrati prefix (npr. razmak ili početak) + glagoljični iotirani znak
    return prefix + (iotiraneMap[key] || 'J' + v);
  });
}
