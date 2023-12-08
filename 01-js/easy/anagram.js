/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false;
  }
  const charCount = {};
  for(const char of str1.toLowerCase())
  {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for(const char of str2.toLowerCase())
  {
    if(!charCount[char])
    {
      return false;
    }
    charCount[char] -= 1;
  }
  for(const count in charCount)
  {
    if(charCount[count]!=0)
    {
      return false;
    }
  }
  return true;

}

module.exports = isAnagram;
