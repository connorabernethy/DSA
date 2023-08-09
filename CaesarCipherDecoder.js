// The Caesar Cipher for this problem is the ROT13 cipher.

function rot13(str) {
  // Create a regex to identify all capital letters
  let regex = /[A-Z]/;

  // Split the string into an array
  let arr = str.split("");

  // Map each letter in the array to the new corresponding,
  // rotated letter and join it back into a string.
  return arr.map(letter => {
    if (regex.test(letter)) {
      // Ascii for A: 65
      // Ascii for Z: 90
      let asciiCode = letter.charCodeAt(0);
      if (asciiCode + 13 > 90) {
        let temp = 90 - asciiCode;
        asciiCode = 64 + (13 - temp);
        return String.fromCharCode(asciiCode);
      } else {
        return String.fromCharCode(asciiCode + 13);
      }
    } else {
      return letter;
    }
  }).join("");
}

console.log(rot13("SERR CVMMN!"));
