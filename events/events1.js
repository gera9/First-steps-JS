'use strict'

//Events

//Function that is runs when all the HTML is loaded
window.addEventListener("load", () => {
    //Mouse events
    function changeBackgroundButton(){
        if(button.style.background == "green"){
            button.style.background = "red";   
        }else{
            button.style.background = "green";
        }
    }

    var button = document.querySelector("#button");

    //Click
    button.addEventListener('click', function(){
        changeBackgroundButton();
    });

    //Mouse Over
    button.addEventListener('mouseover', function(){
        this.style.background = "#CCC";
    });

    //Mouse Out
    button.addEventListener('mouseout', function(){
        this.style.background = "black";
    });

    //Keyboard events
    //Focus
    var input = document.querySelector("#name");

    input.addEventListener('focus', function(){
        console.log("you are focusing in the field");
    });
    //Blur
    input.addEventListener('blur', function(){
        console.log("you are out of the field");
    });

    //Keydown
    input.addEventListener('keydown', function(event){
        console.log("you are pressing this key: ", String.fromCharCode(event.keyCode));
    });

    //Keypress
    input.addEventListener('keypress', function(event){
        console.log("you pressed this key: ", String.fromCharCode(event.keyCode));
    });

    //Key up
    input.addEventListener('keyup', function(event){
        console.log("Key up: ", String.fromCharCode(event.keyCode));
    });
});