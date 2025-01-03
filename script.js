// Object containing translation data for different languages
const translations = {
  bahasa: {
    numbers: { 1: "satu", 2: "dua", 3: "tiga", 4: "empat", 5: "lima", 6: "enam", 7: "tujuh", 8: "delapan", 9: "sembilan" },
    tens: { 10: "sepuluh", 11: "sebelas", 12: "duabelas", 13: "tigabelas", 14: "empatbelas", 15: "limabelas", 16: "enambelas", 17: "tujuhbelas", 18: "delapanbelas", 19: "sembilanbelas", 20: "duapuluh", 30: "tigapuluh", 40: "empatpuluh", 50: "limapuluh", 60: "enampuluh", 70: "tujuhpuluh", 80: "delapanpuluh", 90: "sembilanpuluh" },
    hundreds: { 100: "seratus", 200: "duaratus", 300: "tigaratus", 400: "empatratus", 500: "limaratus", 600: "enamratus", 700: "tujuhratus", 800: "delapanratus", 900: "sembilanratus" }
  },
  tetun: {
    numbers: { 1: "ida", 2: "rua", 3: "tolu", 4: "haat", 5: "lima", 6: "neen", 7: "hitu", 8: "ualu", 9: "sia" },
    tens: { 10: "sanulu" }
  },
  portuguese: {
    numbers: { 1: "um", 2: "dois", 3: "três", 4: "quatro", 5: "cinco", 6: "seis", 7: "sete", 8: "oito", 9: "nove" },
    tens: { 10: "dez", 11: "onze", 12: "doze", 13: "treze", 14: "catorze", 15: "quinze", 16: "dezesseis", 17: "dezessete", 18: "dezoito", 19: "dezenove", 20: "vinte", 30: "trinta", 40: "quarenta", 50: "cinquenta", 60: "sessenta", 70: "setenta", 80: "oitenta", 90: "noventa" },
    hundreds: { 100: "cem", 200: "duzentos", 300: "trezentos", 400: "quatrocentos", 500: "quinhentos", 600: "seiscentos", 700: "setecentos", 800: "oitocentos", 900: "novecentos" }
  },
  tokodede: {
    numbers: { 1: "iso", 2: "ru", 3: "telu", 4: "pat", 5: "lim", 6: "wowniso", 7: "wowru", 8: "wowtelu", 9: "wowpat" },
    tens: { 10: "sagulu" }
  },
  mambae: {
    numbers: { 1: "id", 2: "ru", 3: "te’ul", 4: "faat", 5: "lim", 6: "neen", 7: "hitu", 8: "ualu", 9: "sia" },
    tens: { 10: "sakul" }
  },
  midiki: {
    numbers: { 1: "see", 2: "kairuo", 3: "kaitelu", 4: "kaihaa", 5: "kailime", 6: "kainee", 7: "kaihitu", 8: "kaikaha", 9: "kaisiwe" },
    tens: { 10: "basee", 20: "basa ruo", 30: "basa telu", 40: "basa haat", 50: "basa lime", 60: "basa nee", 70: "basa hitu", 80: "basa kaha", 90: "basa siwe" },
    hundreds: { 100: "atu see", 200: "atu ruo", 300: "atu telu", 400: "atu haa", 500: "atu lime", 600: "atu nee", 700: "atu hitu", 800: "atu kaha", 900: "atu siwe" },
    thousands: { 1000: "rihu see", 2000: "rihu ruo", 3000: "rihu telu", 4000: "rihu haa", 5000: "rihu lime", 6000: "rihu nee", 7000: "rihu hitu", 8000: "rihu kaha", 9000: "rihu siwe" }
  },
  makasae: {
    numbers: { 1: "u", 2: "lola’e", 3: "lolitu", 4: "lolohaa", 5: "lima", 6: "daho", 7: "fitu", 8: "afo", 9: "siwe" },
    tens: { 10: "ruru", 20: "ruru lola’e", 30: "ruru lolitu", 40: "ruru haa", 50: "ruru lima", 60: "ruru daho", 70: "ruru fitu", 80: "ruru afo", 90: "ruru siwe" },
    hundreds: { 100: "rasa u", 200: "rasa lola’e", 300: "rasa lolitu", 400: "rasa haa", 500: "rasa lima", 600: "rasa daho", 700: "rasa fitu", 800: "rasa afo", 900: "rasa siwe" },
    thousands: { 1000: "rihunu u", 2000: "rihunu lola’e", 3000: "rihunu lolitu", 4000: "rihunu haa", 5000: "rihunu lima", 6000: "rihunu daho", 7000: "rihunu fitu", 8000: "rihunu afo", 9000: "rihunu siwe" }
  },
  fataluku: {
    numbers: { 1: "ūkani", 2: "ece", 3: "utu’e", 4: "fāte", 5: "līme", 6: "nēme", 7: "fitu", 8: "kafa", 9: "sīwa" },
    tens: { 10: "ta’ane", 20: "ta'anece", 30: "ta'anutu’e", 40: "ta'anfāte", 50: "ta'anlime", 60: "ta'annēme", 70: "ta'anfitu", 80: "ta'ankafa", 90: "ta'ansīwa" },
    hundreds: { 100: "rahukane", 200: "rahece", 300: "rahutu’e", 400: "rafāte", 500: "ralime", 600: "ranēme", 700: "rafitu", 800: "rakafa", 900: "rasīwa" },
    thousands: { 1000: "rehunukane", 2000: "rehunece", 3000: "rehunutue", 4000: "rehunfāte", 5000: "rehunlime", 6000: "rehunnēme", 7000: "rehunfitu", 8000: "rehunkafa", 9000: "rehunsīwa" }
  },
  english: {
    numbers: { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine" },
    teens: { 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen" },
    tens: { 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety" },
    hundreds: { 100: "one hundred", 200: "two hundred", 300: "three hundred", 400: "four hundred", 500: "five hundred", 600: "six hundred", 700: "seven hundred", 800: "eight hundred", 900: "nine hundred" },
    thousands: { 1000: "one thousand", 2000: "two thousand", 3000: "three thousand", 4000: "four thousand", 5000: "five thousand", 6000: "six thousand", 7000: "seven thousand", 8000: "eight thousand", 9000: "nine thousand" }
  },
  waimaa: {
    numbers: { 1: "see", 2: "kairuo", 3: "kaitelu", 4: "kaihaa", 5: "kailime", 6: "kainina", 7: "kaihitu", 8: "kaikaha", 9: "kaisiwe" },
    tens: { 10: "basee", 20: "basa ruo", 30: "basa telu", 40: "basa haat", 50: "basa lime", 60: "basa nina", 70: "basa hitu", 80: "basa kaha", 90: "basa siwe" },
    hundreds: { 100: "atu see", 200: "atu ruo", 300: "atu telu", 400: "atu haa", 500: "atu lime", 600: "atu nina", 700: "atu hitu", 800: "atu kaha", 900: "atu siwe" },
    thousands: { 1000: "rihu see", 2000: "rihu ruo", 3000: "rihu telu", 4000: "rihu haa", 5000: "rihu lime", 6000: "rihu nina", 7000: "rihu hitu", 8000: "rihu kaha", 9000: "rihu siwe" }
  },
  naueti: {
    numbers: { 1: "see", 2: "kai-rua", 3: "kai-telu", 4: "kai-haa", 5: "kai-lima", 6: "kai-lima resi see", 7: "kai-lima resi kai-rua", 8: "kai-lima resi kai-telu", 9: "kai-lima resi kai-haa" },
    tens: { 10: "weli see", 11: "weli see resi see", 12: "weli see resi kai-rua", 13: "weli see resi kai-telu", 14: "weli see resi kai-haa", 15: "weli see resi kai-lima", 16: "weli see resi kai-lima resi see", 17: "weli see resi kai-lima resi kai-rua", 18: "weli see resi kai-lima resi kai-telu", 19: "weli see resi kai-lima resi kai-haa", 20: "weli kai-rua", 30: "weli kai-telu", 40: "weli kai-haa", 50: "weli kai-lima", 60: "weli kai-lima resi see", 70: "weli kai-lima resi kai-rua", 80: "weli kai-lima resi kai-telu", 90: "weli kai-lima resi kai-haa" },
    hundreds: { 100: "rasa see", 200: "rasa kai-rua", 300: "rasa kai-telu", 400: "rasa kai-haa", 500: "rasa kai-lima", 600: "rasa kai-lima resi see", 700: "rasa kai-lima resi kai-rua", 800: "rasa kai-lima resi kai-telu", 900: "rasa kai-lima resi kai-haa" },
    thousands: { 1000: "rihun see", 2000: "rihun kai-rua", 3000: "rihun kai-telu", 4000: "rihun kai-haa", 5000: "rihun kai-lima", 6000: "rihun kai-lima resi see", 7000: "rihun kai-lima resi kai-rua", 8000: "rihun kai-lima resi kai-telu", 9000: "rihun kai-lima resi kai-haa" }
  }

};

// Conversion function for Bahasa
function convertToBahasa(number) {
  const { numbers, tens, hundreds } = translations.bahasa;
  let numStr = "";

  if (number >= 1000) {
    let thousands = Math.floor(number / 1000);
    numStr += (thousands == 1) ? "seribu " : numbers[thousands] + " ribu ";
    number %= 1000;
  }

  if (number >= 100) {
    let hundredsPlace = Math.floor(number / 100);
    numStr += hundreds[hundredsPlace * 100] + " ";
    number %= 100;
  }

  if (number >= 20) {
    let tensPlace = Math.floor(number / 10);
    numStr += tens[tensPlace * 10] + " ";
    number %= 10;
  } else if (number >= 10) {
    numStr += tens[number] + " ";
    number = 0;
  }

  if (number > 0) {
    numStr += numbers[number] + " ";
  }

  return numStr.trim();
}

// Conversion function for Tetun
function convertToTetun(number) {
  const { numbers, tens } = translations.tetun;
  let numStr = "";

  if (number >= 1000) {
    let thousands = Math.floor(number / 1000);
    numStr += "rihun " + numbers[thousands] + " ";
    number %= 1000;
  }

  if (number >= 100) {
    let hundredsPlace = Math.floor(number / 100);
    numStr += "atus " + numbers[hundredsPlace] + " ";
    number %= 100;
  }

  if (number >= 20) {
    let tensPlace = Math.floor(number / 10);
    numStr += numbers[tensPlace] + "nulu";
    if (number % 10 !== 0) {
      numStr += " resin " + numbers[number % 10];
    }
    number = 0;
  } else if (number >= 10) {
    numStr += tens[10];
    if (number > 10) {
      numStr += " resin " + numbers[number % 10];
    }
    number = 0;
  }

  if (number > 0) {
    numStr += numbers[number] + " ";
  }

  return numStr.trim();
}
// Conversion function for Portuguese
function convertToPortuguese(number) {
  const { numbers, tens, hundreds } = translations.portuguese;
  let numStr = "";

  if (number >= 1000) {
    let thousands = Math.floor(number / 1000);
    numStr += (thousands === 1) ? "mil " : numbers[thousands] + " mil ";
    number %= 1000;
  }

  if (number >= 100) {
    let hundredsPlace = Math.floor(number / 100);
    numStr += (hundredsPlace === 1 && number % 100 === 0) ? "cem " : hundreds[hundredsPlace * 100] + " ";
    number %= 100;
  }

  if (number >= 20) {
    let tensPlace = Math.floor(number / 10);
    numStr += tens[tensPlace * 10];
    if (number % 10 !== 0) {
      numStr += " e " + numbers[number % 10];
    }
    number = 0;
  } else if (number >= 10) {
    numStr += tens[number];
    number = 0;
  }

  if (number > 0) {
    numStr += (numStr ? " e " : "") + numbers[number];
  }

  return numStr.trim();
}

// Conversion function for Tokodede
function convertToTokodede(number) {
  const { numbers, tens } = translations.tokodede;
  let numStr = "";

  if (number >= 1000) {
    let thousands = Math.floor(number / 1000);
    numStr += "rihun " + numbers[thousands] + " ";
    number %= 1000;
  }

  if (number >= 100) {
    let hundredsPlace = Math.floor(number / 100);
    numStr += "atus " + numbers[hundredsPlace] + " ";
    number %= 100;
  }

  if (number >= 20) {
    let tensPlace = Math.floor(number / 10);
    numStr += "sakui" + numbers[tensPlace] + " ";
    if (number % 10 !== 0) {
      numStr += " gresi " + numbers[number % 10];
    }
    number = 0;
  } else if (number >= 10) {
    numStr += tens[10];
    if (number > 10) {
      numStr += " gresi " + numbers[number % 10];
    }
    number = 0;
  }

  if (number > 0) {
    numStr += numbers[number] + " ";
  }

  return numStr.trim();
}

// Conversion function for Mambae
function convertToMambae(number) {
  const { numbers, tens } = translations.mambae;
  let numStr = "";

  if (number >= 1000) {
    let thousands = Math.floor(number / 1000);
    numStr += "rihun " + numbers[thousands] + " ";
    number %= 1000;
  }

  if (number >= 100) {
    let hundredsPlace = Math.floor(number / 100);
    numStr += "atus " + numbers[hundredsPlace] + " ";
    number %= 100;
  }

  if (number >= 20) {
    let tensPlace = Math.floor(number / 10);
    numStr += numbers[tensPlace] + "nul";
    if (number % 10 !== 0) {
      numStr += " resin " + numbers[number % 10];
    }
    number = 0;
  } else if (number >= 10) {
    numStr += tens[10];
    if (number > 10) {
      numStr += " resin " + numbers[number % 10];
    }
    number = 0;
  }

  if (number > 0) {
    numStr += numbers[number] + " ";
  }

  return numStr.trim();
}

// Conversion function for Midiki
function convertToMidiki(number) {
  const { numbers, tens, hundreds, thousands } = translations.midiki;
  let numStr = "";

  if (number >= 1000) {
    let thousandsPlace = Math.floor(number / 1000) * 1000;
    numStr += thousands[thousandsPlace] + " ";
    number %= 1000;
  }

  if (number >= 100) {
    let hundredsPlace = Math.floor(number / 100) * 100;
    numStr += hundreds[hundredsPlace] + " ";
    number %= 100;
  }

  if (number >= 20) {
    let tensPlace = Math.floor(number / 10) * 10;
    numStr += tens[tensPlace];
    number %= 10;
    if (number > 0) {
      numStr += " resi " + numbers[number];
    }
  } else if (number > 10) {
    numStr += tens[10] + " resi " + numbers[number % 10];
    number = 0;
  } else if (number == 10) {
    numStr += "basee";
    number = 0;
  } else if (number > 0) {
    numStr += numbers[number];
  }

  return numStr.trim();
}

// Conversion function for Makasae
function convertToMakasae(number) {
  const { numbers, tens, hundreds, thousands } = translations.makasae;
  let numStr = "";

  if (number >= 1000) {
    let thousandsPlace = Math.floor(number / 1000) * 1000;
    numStr += thousands[thousandsPlace] + " ";
    number %= 1000;
  }

  if (number >= 100) {
    let hundredsPlace = Math.floor(number / 100) * 100;
    numStr += hundreds[hundredsPlace] + " ";
    number %= 100;
  }

  if (number >= 20) {
    let tensPlace = Math.floor(number / 10) * 10;
    numStr += tens[tensPlace];
    number %= 10;
    if (number > 0) {
      numStr += " resi " + numbers[number];
    }
  } else if (number > 10) {
    numStr += tens[10] + " resi " + numbers[number % 10];
    number = 0;
  }
  else if (number == 10) {
    numStr += "ruru";
    number = 0;
  }
  else if (number > 0) {
    numStr += numbers[number];
  }

  return numStr.trim();
}

// Conversion function for Fataluku
function convertToFataluku(number) {
  const { numbers, tens, hundreds, thousands } = translations.fataluku;
  let numStr = "";

  if (number >= 1000) {
    let thousandsPlace = Math.floor(number / 1000);
    numStr += thousands[thousandsPlace * 1000] + " ";
    number %= 1000;
  }

  if (number >= 100) {
    let hundredsPlace = Math.floor(number / 100);
    numStr += hundreds[hundredsPlace * 100] + " ";
    number %= 100;
  }

  if (number >= 20) {
    let tensPlace = Math.floor(number / 10) * 10;
    numStr += tens[tensPlace] + " ";
    number %= 10;
  } else if (number > 10) {
    numStr += "ta'ankan " + numbers[number % 10];
    return numStr.trim();  // Return here to avoid appending "undefined"
  }
  else if (number == 10) {
    numStr += "ta'ane";
    return numStr.trim();  // Return here to avoid appending "undefined"
  }

  if (number > 0) {
    numStr += numbers[number];
  }

  return numStr.trim();
}

// Conversion function for English
function convertToEnglish(number) {
  const { numbers, teens, tens, hundreds, thousands } = translations.english;
  let numStr = "";

  if (number >= 1000) {
    let thousandsPlace = Math.floor(number / 1000);
    numStr += thousands[thousandsPlace * 1000] + " ";
    number %= 1000;
  }

  if (number >= 100) {
    let hundredsPlace = Math.floor(number / 100);
    numStr += hundreds[hundredsPlace * 100] + " ";
    number %= 100;
  }

  if (number >= 20) {
    let tensPlace = Math.floor(number / 10) * 10;
    numStr += tens[tensPlace] + (number % 10 !== 0 ? "-" : "");
    number %= 10;
  } else if (number >= 10) {
    numStr += teens[number];
    return numStr.trim();
  }

  if (number > 0) {
    numStr += numbers[number];
  }

  return numStr.trim();
}

//Conversion function for Waima'a
function convertToWaimaa(number) {
  const { numbers, tens, hundreds, thousands } = translations.waimaa;
  let numStr = "";

  if (number >= 1000) {
    let thousandsPlace = Math.floor(number / 1000);
    numStr += thousands[thousandsPlace * 1000] + " ";
    number %= 1000;
  }

  if (number >= 100) {
    let hundredsPlace = Math.floor(number / 100);
    numStr += hundreds[hundredsPlace * 100] + " ";
    number %= 100;
  }

  if (number >= 20) {
    let tensPlace = Math.floor(number / 10) * 10;
    numStr += tens[tensPlace];
    number %= 10;
    if (number > 0) {
      numStr += " resi " + numbers[number];
    }
  } else if (number > 10) {
    numStr += tens[10] + " resi " + numbers[number % 10];
    number = 0;
  } else if (number == 10) {
    numStr += "basee";
    number = 0;
  } else if (number > 0) {
    numStr += numbers[number];
  }

  return numStr.trim();
}

//Conversion function for Naueti
function convertToNaueti(number) {
  const { numbers, tens, hundreds, thousands } = translations.naueti;
  let numStr = "";

  if (number >= 1000) {
    let thousandsPlace = Math.floor(number / 1000);
    numStr += thousands[thousandsPlace * 1000] + " ";
    number %= 1000;
  }

  if (number >= 100) {
    let hundredsPlace = Math.floor(number / 100);
    numStr += hundreds[hundredsPlace * 100] + " ";
    number %= 100;
  }

  if (number >= 20) {
    let tensPlace = Math.floor(number / 10) * 10;
    numStr += tens[tensPlace];
    number %= 10;
    if (number > 0) {
      numStr += " resi " + numbers[number];
    }
  } else if (number > 10) {
    numStr += tens[10] + " resi " + numbers[number % 10];
    number = 0;
  } else if (number == 10) {
    numStr += "weli see";
    number = 0;
  } else if (number > 0) {
    numStr += numbers[number];
  }

  return numStr.trim();
}

// Function to capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Event handler to spell out the number in all languages
function spellOutNumber(event) {
  event.preventDefault();
  const numberInput = document.getElementById('number');
  let number = parseInt(numberInput.value);
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '<h1>Number: ' + number + '</h1>'; // Clear previous results

  if (number < 1 || number > 9999) {
    resultDiv.textContent = "Please enter a number between 1 and 9999.";
    return;
  }

  const languages = ['tetun', 'portuguese', 'bahasa', 'english', 'mambae', 'makasae', 'tokodede', 'fataluku', 'waimaa', 'midiki', 'naueti'];
  let tableContent = '<table><tr><th>Language</th><th>Spelled Out Number</th></tr>';

  languages.forEach(language => {
    let numStr;
    switch (language) {
      case 'bahasa':
        numStr = convertToBahasa(number);
        break;
      case 'tetun':
        numStr = convertToTetun(number);
        break;
      case 'portuguese':
        numStr = convertToPortuguese(number);
        break;
      case 'tokodede':
        numStr = convertToTokodede(number);
        break;
      case 'mambae':
        numStr = convertToMambae(number);
        break;
      case 'midiki':
        numStr = convertToMidiki(number);
        break;
      case 'makasae':
        numStr = convertToMakasae(number);
        break;
      case 'fataluku':
        numStr = convertToFataluku(number);
        break;
      case 'english':
        numStr = convertToEnglish(number);
        break;
      case 'waimaa':
        numStr = convertToWaimaa(number);
        break;
      case 'naueti':
        numStr = convertToNaueti(number);
        break;
    }
    tableContent += `<tr><td>${capitalize(language)}</td><td>${numStr}</td></tr>`;
  });
  tableContent += '</table>';
  resultDiv.innerHTML += tableContent;
}