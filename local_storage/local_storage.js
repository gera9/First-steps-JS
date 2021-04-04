'use strict'

//Local storage

//Check the local storage availability
if(typeof(Storage) !== 'undefined'){
    console.log('Localstorage disponible');
}else{
    console.log('Localstorage NO disponible');
}


//Save data
localStorage.setItem("title", "C++ course");

//Recover
console.log(localStorage.getItem("title"));

//Save objects

var user = {
    name: "Gerardo",
    email: "correo@correo.com",
    web: "www.mysite.com"
};

//JSON.stringify coverts to string the object
localStorage.setItem("user", JSON.stringify(user));

//Recover the object by converting the object string to an pure object
var userjs = JSON.parse(localStorage.getItem("user"));
console.log(userjs);

localStorage.removeItem("title");