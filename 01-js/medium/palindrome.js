/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let charArr = [];
  for(let i=0; i<str.length; i++) {
    if( (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)) {
      charArr.push(str.charAt(i));
    } 
  }
  str = charArr.join("");
  let right = str.length-1, left=0;
  while(left < right) {
    if(str.charAt(left) != str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
