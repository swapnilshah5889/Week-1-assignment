/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  let map1 = new Map();
  let map2 = new Map();

  // Build map for str1
  for(let i =0; i<str1.length; i++) {
    let c = str1.charAt(i);
    if(map1.has(c)) {
      map1.set(c, map1.get(c) + 1);
    }
    else {
      map1.set(c, 1);
    }
  }

  // Build map for str2
  for(let i =0; i<str2.length; i++) {
    let c = str2.charAt(i);
    if(map2.has(c)) {
      map2.set(c, map2.get(c) + 1);
    }
    else {
      map2.set(c, 1);
    }
  }

  let mapEqual = true;
  map1.forEach((value, key) => {
    if(map2.has(key)) {
      // Frequecy does not match of the character
      if(map1.get(key) != map2.get(key)) {
        mapEqual = false;
      }
      // Remove key from both maps
      else {
        map1.delete(key);
        map2.delete(key);
      }
    }
    else {
      mapEqual = false;
    }
  });

  // If map2 has keys left
  if(map2.size>0) {
    mapEqual = false;
  }
  return mapEqual;
}

module.exports = isAnagram;
