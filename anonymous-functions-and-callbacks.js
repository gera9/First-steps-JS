'use strict'

//Anonymous funtions and Callbacks
//Anonymous function is basically an unnamed function 

var movies = function(name){
    return "The movie is " + name;
}

//Callback example
function sum(number1, number2, sumandshow, sumapordos){
    var result = number1 + number2;

    sumandshow(result);
    sumapordos(result);
    return result;
}

//Arrow function: parameter => {}
sum(5, 7, data => {
    console.log("The sum is: " + data);
},
data => {
    console.log("La suma por dos es: " + (data * 2));
});