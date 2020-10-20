'use strict'

//Searching
var number = 444;
var text1 = "Hola, mundo, soy Gerardo.";
var text2 = "Hola, mundo, soy Gerardo. Gerardo es mi nombre.";

//Find the index of the specified word
var search = text1.indexOf(",");
console.log(search);
    
    //Returns -1 if it doesn't find what you want to find
    var search2 = text1.search("z"); 
    console.log(search2);

//Find the last appearance of the word
var search3 = text2.lastIndexOf(",");
console.log(search3);

/*
    Returns an array that contains information about 
    what you want to find
*/
var search4 = text1.match("Gerardo");
console.log(search4);
    
    //With regular expressions
    var search5 = text2.match(/Gerardo/g);
    console.log(search5);

//Extract a piece of text
var search6 = text2.substr(0, 4);
console.log(search6);

//Extract a word
var search7 = text2.charAt(0);
console.log(search7);

/* 
    Returns true or false if the string begins with the 
    specified text
*/
var search8 = text2.startsWith("0");
console.log(search8);

/* 
    Returns true or false if the string ends with the 
    specified text
*/
var search9 = text2.endsWith("es mi nombre.");
console.log(search9);

// Returns true or false if it finds the word
var search10 = text2.includes("Gerardo");
console.log(search10);