'use strict'

var categories = ["Action", "Comedy", "Terror"];
var movies = ["Terminator", "PCU", "The Exorcist"];

var cinema = [categories, movies];

//Array operations
movies.push("Batman");
console.log(movies);

//Delete a element
var index = categories.indexOf("Comedy");

if(index > -1){
    //Remove items in a specific range
    categories.splice(index, 1);
}

console.log(categories);

//Convert an array to string by specifying the separators
var stringMovies = movies.join(", ");
console.log(stringMovies);

//Sorting an array
console.log("Sorted: ");
console.log(movies.sort())

    //Reverse sort
    console.log("Reverse sort: ");
    console.log(movies.reverse());