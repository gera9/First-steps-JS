'use strict'


//Operators
var number1 = 3;
var number2 = 4;
var result = number1 % number2;

alert("The result is " + result);

//Data types
/*
    Integer
    String
    Boolean
    Float
*/

//Convert to decimal
var false_number = "7";

console.log(Number(false_number) + number1);

//Only Integer
console.log(parseInt(false_number)  + number1);

//Only Float
console.log(parseFloat(false_number)  + number1);

//Convert to String
console.log(String(number1 + " text " + number2));

//Typeof function

console.log(typeof(number1));
console.log(typeof(false_number));