/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running


function countVowels(str) {
    const vowels = ["a","e","i","o","u"];
    const strconversion = str.toLowerCase().split("").sort();
    let vowelcount=0;
    for(i=0;i<=vowels.length;i++){
     for(j=0;j<strconversion.length;j++)
      {
        if(vowels[i]==strconversion[j]){
          vowelcount=vowelcount+1
        }
        else{
          vowelcount=vowelcount;
        }
      }
     
    }
    return vowelcount;
}

module.exports = countVowels;
*/
function countVowels(str) {
  const vowelSet = new Set(["a", "e", "i", "o", "u"]); // Using a set for constant time lookup
  const strLower = str.toLowerCase();
  let vowelCount = 0;
  
  for (let char of strLower) {
      if (vowelSet.has(char)) {
          vowelCount++;
      }
  }
  
  return vowelCount;
}

module.exports = countVowels;
