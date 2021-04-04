'use strict'

//let and var tests

//Var test
var number = 40;
console.log(number); //Value = 40

if(true){
    var number = 50;
    console.log(number); //Value = 50
}

console.log(number); //Value = 50

//let test
let text = "Test text.";
console.log(text); //value = Test text.

if(true){
    let text = "Test text 2.";
    console.log(text); //value = Test text 2.
}

console.log(text); //value = Test text.