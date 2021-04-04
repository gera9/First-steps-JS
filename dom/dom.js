'use strict'

//Document Object Model (DOM)
//Selecting objects of my HTML file by ID
    //GetElementById
    var box = document.getElementById('myBox');

    //QuerySelector
    var boxQS = document.querySelector('#myBox');

function changeColor(color){
    boxQS.style.background = color;
}

//Change the text
box.innerHTML = "New text!";

box.style.background = "red";
box.style.padding = "20px";
box.style.color = "white";

//Add or more classes
box.className = "myClass myClass2";

//Selecting objects by TAG
var allDivs = document.getElementsByTagName('div');

//Get content (textContent)
//var textContentDiv = allDivs[2].textContent;
//var textContentDiv = allDivs[2];
//textContentDiv.innerHTML = "More text...";
//textContentDiv.style.background = "black";
//console.log(allDivs);

var section = document.querySelector("#mySection");
var hr = document.createElement("hr");


for(var element in allDivs){
    if(typeof allDivs[element].textContent == 'string'){
        var p = document.createElement("p");
        var text = document.createTextNode(allDivs[element].textContent);
        p.append(text);
        section.append(p);
    }
}

section.append(hr);

//Append añade después; preprend añade antes

//Selecting objects by CLASS
var redDivs = document.getElementsByClassName("red");
var yellowDivs = document.getElementsByClassName("yellow");

for(var index in redDivs){
    if(redDivs[index].className == "red"){
        redDivs[index].style.background = "red";
    }
}

//Query Selector: Select one object only (the first object)
var id = document.querySelector("#header");
console.log(id);
var classRed = document.querySelector("div.red");
var classRed = document.querySelector("div");
console.log(classRed);


//querySelectorAll() Select ALL the objects that you specify