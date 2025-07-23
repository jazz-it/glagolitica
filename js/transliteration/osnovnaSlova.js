// js/transliteration/osnovnaSlova.js

// Fiksna tablica preslikavanja: latinično slovo → glagoljični znak
export const osnovnaMap = {
  'A': '\u2C00', 'a': '\u2C30',   // Ⰰ ⰰ
  'B': '\u2C01', 'b': '\u2C31',   // Ⰱ ⰱ
  'V': '\u2C02', 'v': '\u2C32',   // Ⰲ ⰲ
  'G': '\u2C03', 'g': '\u2C33',   // Ⰳ ⰳ
  'D': '\u2C04', 'd': '\u2C34',   // Ⰴ ⰴ
  'E': '\u2C05', 'e': '\u2C35',   // Ⰵ ⰵ
  'Z': '\u2C07', 'z': '\u2C37',   // Ⰷ ⰷ
  'I': '\u2C09', 'i': '\u2C49',   // Ⰹ ⰹ
  'J': '\u2C09', 'j': '\u2C49',   // J tretiramo kao I/ize
  'K': '\u2C0A', 'k': '\u2C4A',   // Ⰺ ⰺ
  'L': '\u2C0B', 'l': '\u2C4B',   // Ⰻ ⰻ
  'M': '\u2C0C', 'm': '\u2C4C',   // Ⰼ ⰼ
  'N': '\u2C0D', 'n': '\u2C4D',   // Ⰽ ⰽ
  'O': '\u2C0E', 'o': '\u2C4E',   // Ⰾ ⰾ
  'P': '\u2C0F', 'p': '\u2C4F',   // Ⰿ ⰿ
  'R': '\u2C10', 'r': '\u2C50',   // Ⱀ ⱀ
  'S': '\u2C11', 's': '\u2C51',   // Ⱁ ⱁ
  'T': '\u2C12', 't': '\u2C52',   // Ⱂ ⱂ
  'U': '\u2C13', 'u': '\u2C53',   // Ⱃ ⱃ
  'F': '\u2C14', 'f': '\u2C54',   // Ⱄ ⱄ
  'H': '\u2C15', 'h': '\u2C55',   // Ⱅ ⱅ
  'C': '\u2C1C', 'c': '\u2C5C'    // Ⱌ ⱜ (ts)
};

// Jednostavna funkcija koja prolazi kroz svaki znak:
//   ako postoji mapping, ispiši glagoljični znak, inače vrati original
export function transliterateOsnovnaSlova(text) {
  return Array.from(text).map(ch => osnovnaMap[ch] || ch).join('');
}
