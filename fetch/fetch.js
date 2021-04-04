'use strict';

//Fetch (ajax) and requests to services /apis rest
var divUsers = document.querySelector("#users");
var divUser = document.querySelector("#user");
var divTeacher = document.querySelector("#teacher");

    getUsers()
        .then(data => data.json())
        .then(users => {
            usersList(users.data);

            return getInfo();
        })

        .then(data => {
            divTeacher.innerHTML = data;
            return getUser();
        })

            .then(data => data.json())
            .then(user =>{
                showUser(user.data);
            });
                
    function getUsers(){
        return fetch('https://reqres.in/api/users');
    }

    function getUser(){
        return fetch('https://reqres.in/api/users/2');
    }

    //Promise right from the start
    function getInfo(){
        let teacher = {
            name: 'Gerardo',
            last_name: 'Morales Ramos',
            website: 'https://gmr.com'
        };

        return new Promise((resolve, reject) => {
            var teacher_string = "";
            setTimeout(function(){
                teacher_string = JSON.stringify(teacher);
                
                if(typeof teacher_string != 'string' || teacher_string == '') return reject('Error 1');
         
                return resolve(teacher_string);
            }, 3000);
        });
    }

    function usersList(users){
        users.map((user, i) => {
            let name = document.createElement('p');
            name.innerHTML = i + '.- ' + user.first_name + ' ' + user.last_name;
            divUsers.appendChild(name);

            document.querySelector(".loading").style.display = "none";
        });
    }

    function showUser(user){
        let name = document.createElement('p');
        let avatar = document.createElement('img');
            name.innerHTML = user.first_name + ' ' + user.last_name;
            avatar.src = user.avatar;
            avatar.width = '100';
   
            divUser.appendChild(name);
            divUser.appendChild(avatar);

            document.querySelector("#user .loading").style.display = "none";
    }