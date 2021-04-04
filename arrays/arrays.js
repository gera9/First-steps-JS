'use strict'

//Ways to create arrays
var names = ["Gerardo", "Vianey", "Sally", 21, 21, 14, true];

//As object
var languages =  new Array("Javascript", "Python", "C++", "Java");

//Array length
console.log(languages.length);

var element = parseInt(prompt("What element do you want?", 0));

if(element >= languages.length){
    alert("You have to type numbers from 0 to 4.");
} else {
    alert(languages[element]);
}

//Foreach callback
languages.forEach((element, index) => {
    document.write("<p>" + index + ".- " + element + "</p>");
});