/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

function isPalindrome(str) { 
const strRefined = str.toLowerCase().trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"?]/g,"").split(" ").join(""); 
  const strRefined2 = str.toLowerCase().trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"?]/g,"").split(" ").join("");
  const updatedstrRefined=strRefined;
  const reverseStr=strRefined2.split("").reverse().join("");
    if(updatedstrRefined==reverseStr){
 return true;
}
else{
return false;
}
}
module.exports = isPalindrome;
*/
function isPalindrome(str) {
  const refinedStr = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"?\s]/g, "");
  const reversedStr = refinedStr.split("").reverse().join("");
  return refinedStr === reversedStr;
}

module.exports = isPalindrome;
