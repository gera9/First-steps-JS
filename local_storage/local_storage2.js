'use strict'

//Exercises about Local Storage

var form = document.querySelector("#movies-form");

form.addEventListener("submit", function(){
    var title = document.querySelector("#add_movie").value;
    if(title.length >= 1){
        localStorage.setItem(title, title);
    }
});

var ul = document.querySelector("#movies-list");
for(var i in localStorage){
    
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]); 
        ul.append(li);
    }
}

var formDelete = document.querySelector("#del-movies-form");

formDelete.addEventListener("submit", function(){
    var title = document.querySelector("#delete_movie").value;
    if(title.length >= 1){
        localStorage.removeItem(title);
    }
});