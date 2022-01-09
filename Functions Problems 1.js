//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

let myProblem = 'Hello this is functions problem 1.'
let myArray = myProblem.split(" ")
console.log(myArray)

for(let value = 0; value < myArray.length; value++) {
    //console.log(myArray.length[value])
    if (myArray.length[value] > 8) {
        return console.log('this is the largest string')
    } else {console.log('this is NOT the largest string')}

}