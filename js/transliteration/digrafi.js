// js/transliteration/digrafi.js

// Fiksna tablica preslikavanja najčešćih digrafa/trigrafa:
// DŽ, LJ, NJ u svim uobičajenim kombinacijama velikih i malih slova
const digrafMap = {
  // DŽ
  'DŽ': '\u2C04\u2C06', // ⰄⰆ
  'Dž': '\u2C04\u2C36', // Ⰴⱶ
  'dŽ': '\u2C34\u2C06', // ⰴⰆ
  'dž': '\u2C34\u2C36', // ⰴⱶ

  // LJ
  'LJ': '\u2C0B\u2C09', // ⰋⰉ
  'Lj': '\u2C0B\u2C49', // Ⰻⰹ
  'lJ': '\u2C4B\u2C09', // ⰻⰉ
  'lj': '\u2C4B\u2C49', // ⰻⰹ

  // NJ
  'NJ': '\u2C0D\u2C09', // ⰍⰉ
  'Nj': '\u2C0D\u2C49', // Ⰽⰹ
  'nJ': '\u2C4D\u2C09', // ⰽⰉ
  'nj': '\u2C4D\u2C49'  // ⰽⰹ
}

const pattern = new RegExp(
  Object.keys(digrafMap)
        // sortiranje po duljini kako bi 'DŽ' prije 'D' u regexu
        .sort((a, b) => b.length - a.length)
        .join('|'),
  'g'
)

export function transliterateDigrafi(text) {
  return text.replace(pattern, match => digrafMap[match])
}
