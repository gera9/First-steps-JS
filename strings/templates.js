'use strict'

//String templates

var name = prompt("Type your name:");
var lastname = prompt("Type your last name:");

var template = `
    <h1>¡Welcome, ${name}!</h1>
    <p>Your last name is: ${lastname}</p>
`;

document.write(template);
