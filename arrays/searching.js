'use strict'

var languages = ["Javascript", "Java", "Python", "C++",  "R"];

//Searching
var search = languages.find(language => language == "C++");

console.log(search);

    //Returns the index
    var search2 = languages.findIndex(language => language == "C++");

    console.log(search2);

//Numbers filters
var prices = [100, 250, 300, 1000, 900];

var search3 = prices.some(price => price > 1000);
console.log(search3);