'use strict'

//Transformation to text
var number = 44;
var text1 = "String";
var text2 = "String 2";

var data = number.toString();
    data = text1.toLowerCase();
    data = text2.toUpperCase();

console.log(data);

//Length with variables and arrays
var name = "Gerardo M";

console.log(name.length);

//Concat
var result = text1 + " " + text2;
console.log(result);

var result2 = text1.concat(` + ${text2}`);
console.log(result2);