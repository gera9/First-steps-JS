'use strict'

window.addEventListener('load', function(){
    console.log("Loaded");

    var form = document.querySelector("#form");

    var box_right = document.querySelector(".right");
    box_right.style.display = "none";

    form.addEventListener("submit", function(){
        var name = document.querySelector("#name").value;
        var last_name = document.querySelector("#last_name").value;
        var age = parseInt(document.querySelector("#age").value);

        if(name.trim() == null || name.trim().length == 0){
            alert("The name is not valid!");
            document.querySelector("#error_name").innerHTML = "Incorrect name.";
            return false;
        }else{
            document.querySelector("#error_name").style.display = "none";
        }

        if(last_name.trim() == null || last_name.trim().length == 0){
            alert("The last name is not valid!");
            document.querySelector("#error_lastName").innerHTML = "Incorrect last name.";
            return false;
        }else{
            document.querySelector("#error_lastName").style.display = "none";
        }

        if(age == null || age <= 0 || isNaN(age)){
            alert("The age is not valid!");
            document.querySelector("#error_age").innerHTML = "Incorrect age.";
            return false;
        }else{
            document.querySelector("#error_age").style.display = "none";
        }

        box_right.style.display = "block";

        var p_name = document.querySelector("#p_name span");
        var p_lastName = document.querySelector("#p_lastName span");
        var p_age = document.querySelector("#p_age span");

        p_name.innerHTML = name;
        p_lastName.innerHTML = last_name;
        p_age.innerHTML = age;

        /*var user_data = [name, last_name, age];

        for(var index in user_data){
            var p = document.createElement("p");
            p.append(user_data[index]);
            box_right.append(p);
        }*/
    });
});