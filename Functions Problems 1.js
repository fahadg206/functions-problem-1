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

// I figured out what the issue was. I didn't create an empty variable to compare myArray with. After creating longestWord variable and setting it equal to 0, i compared that variable 
//to myArray through a for loop. What that loop is now doing is itering through each element and replacing the longestWord variable with each element. Since longestWord was set at 0, 
//it was really comparing the elements in myArray to one another, replacing every element with the one that is larger in length. I then created an if statement comparing myArray.length
// to the longestWord variable, which was equal to 0. Then in the code block of my if statement, i set longestWord variable equal to the largest element in myArray.length. I then
//console logged longestWord which gave me an output of 9("functions") which was correct. 