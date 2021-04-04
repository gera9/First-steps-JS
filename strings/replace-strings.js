'use strict'

var number = 444;
var text1 = "Hola, mundo, soy Gerardo.";
var text2 = "  Hello, world, I'm Gerardo.  ";


//It replaces a word of the string
var search = text1.replace("Gerardo", "Vianey");
console.log(search);

//It cuts the string in an interval
var search1 = text1.slice(0, 4);
console.log(search1);

/*
    It divides and puts a text string inside an array by specifying 
    the characters that link them
*/
var search2 = text1.split(" ");
console.log(search2);

//Remove the leading and trailing spaces
var search3 = text2.trim();
console.log(search3);