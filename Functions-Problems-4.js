//Write a JavaScript function that iterates the integers from 1 to 100. 
//But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
//For numbers that are multiples of both three and five print "FizzBuzz".

function integer() {
    for(i=1; i <= 100; i++) {
        let str = "";
        if(i % 3 === 0 && i % 5 === 0) {
        str = 'FizzBuzz';
        console.log(str);
        } else if(i % 5 === 0) {
        str = 'Buzz';
        console.log(str);
        } else if(i % 3 === 0) {
        str = 'Fizz';
        console.log(str);
        }
    }

} 

integer(); 






