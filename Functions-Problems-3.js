//Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences 
//of the specified letter within the string. 

function letterOccurence(string, letter) {
    return string.split(letter).length -1;
    

}
 
letterOccurence('Hello World', 'l')
console.log(letterOccurence('Hello World', 'l'))

// First i created a function with parameters called string and letter. i then use the split method on the string parameter to split the string into individual letters. 
// I did that by putting the letter parameter in the parentheses. I then use the length method to evaluate the length, and subtract it by 1. I then called the function with 
// both arguments and then console logged it.

