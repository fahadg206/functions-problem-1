//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function myFunction(str) {
    let myArray = str.split(" ")
     longString = 0;

    for(let i=0; i < myArray.length; i++) {
        if(myArray.length > longString) {
            longString = myArray[i].length
        }
    }
    
    return longString;
}

console.log(myFunction('Hello everyone my name is Fahad Guled'))









