//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function stringCount(str) {
    const myArray = str.split(" ")
    let longString = "";

    for(let i=0; i < myArray.length; i++) {
        if(myArray.length > longString.length) {
            longString = myArray[i]
           
        }
    }
    
    return longString;
}

console.log(stringCount('Hello everyone my name is Fahad Guled'))









