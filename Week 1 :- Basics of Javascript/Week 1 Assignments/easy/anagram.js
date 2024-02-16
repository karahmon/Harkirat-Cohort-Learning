/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

*/
function isAnagram(str1, str2) {
 
  if (str1.length!=str2.length){
    return false;
  }
  const str1sort =str1.trim().split("").sort(); //trim - to remove space,split to convert into arrsy,sort- to sort srray alphabetically
  const str2sort =str2.trim().split("").sort();

  for (i=0;i<=str1sort.length;i++){

  if(str1sort[i]==str2sort[i]){

    return true;
  }
  else
  {
    return false;
  }
}
}
module.exports = isAnagram;