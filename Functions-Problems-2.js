//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//Hint: use the "spilt", the Array#includes method and, a "for" loop or "forEach" loop

function currentVowelCount(str) {
  const arrayOfVowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  const arrayOfLetters = str.toLowerCase().split("")
    
    
  for(let i=0; i < arrayOfLetters.length; i++) {
    if(arrayOfVowels.includes(arrayOfLetters[i])) {
      vowelCount +=1;
    }
  
  }

  return vowelCount;

}
    
console.log(currentVowelCount('Hey this is my string right here'))
  