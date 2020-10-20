'use strict'

//Functions
function calculator(number1, number2, show = false){
    if(!show){
        document.write("Empty.");
    }else{
        document.write(String(number1 + " + " + number2 + " = ") + (number1 + number2));
    }
}

calculator(2, 2)