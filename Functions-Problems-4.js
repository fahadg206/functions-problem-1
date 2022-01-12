//Write a JavaScript function that iterates the integers from 1 to 100. 
//But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
//For numbers that are multiples of both three and five print "FizzBuzz".

function integer() {
    let remainder = "";
    for(i=1; i <= 100, i++;) {
        if(i % 3 === 0) {
        remainder += 'Fizz'
        } else if(i % 5 === 0) {
        remainder += 'Buzz'
        } else if(i % 3 && i % 5 === 0) {
        remainder += 'FizzBuzz'
        }
    }
}


