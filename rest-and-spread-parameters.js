'use strict'

//Rest and Spread parameters

//Rest parameter
function fruitList(fruit1, fruit2, ...restFruits){
    console.log("Fruit 1: " + fruit1);
    console.log("Fruit 2: " + fruit2);
    console.log(restFruits);
}

fruitList("Orange", "Apple", "Watermelon", "Banana");

//Spread parameter
var fruits = ["Orange", "Apple"];
fruitList( ...fruits, "Watermelon", "Banana");