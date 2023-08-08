function palindrome(str) {
  // Strip the string of all non-alphanumeric characters, including underscore
  let str2 = str.replace(/[^0-9a-z]/gi,"").toLowerCase();

  // Next, we iterate over the string from the start and the end
  // simultaneously to check each character against its counterpart.

  let j = str2.length - 1;
  for (let i = 0; i < str2.length / 2; i++) {
    // Check each character for equality
    if (str2[i] !== str2[j]) {
      return false;
    }
    j -= 1;
  }
  return true;
}

// This will return true.
palindrome("A man, a plan, a canal. Panama");

// This will return false.
palindrome("nope");
