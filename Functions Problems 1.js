//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

let myProblem = 'Hello this is functions problem 1.'
let myArray = myProblem.split(" ")
console.log(myArray)

let longestWord = 0

for(let value = 0; value < myArray.length; value++) {
    if(myArray[value].length > longestWord ) {
        longestWord = myArray[value].length
    }
}

console.log(longestWord)