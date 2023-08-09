function convertToRoman(num) {
  // Create a dictionary of all the Roman Numerals and their
  // corresponding values:
  let dict = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},romanNumeral = '',letter;

  // Iterate over the dictionary and subtract from num
  // until the num is less than or equal to 1.
  for (letter in dict) {
    while (num >= dict[letter]) {
      // While num is greater than the dictionary value,
      // add the roman numeral to the global string
      // and subtract the value from num.
      romanNumeral += letter;
      num -= dict[letter];
    }
  }
  return romanNumeral;
}

convertToRoman(36);
