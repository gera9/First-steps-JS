'use strict'
var date = new Date();
var year = date.getFullYear();
//getMonth saca los meses por número empezando desde cero (Enero = 0, Febrero = 1,...)
var mes = date.getMonth();
//El día tambien se contabiliza desde cero
var day = date.getDay();
//Segunda manera pero contabiliza desde uno
var day2 = date.getDate();
//Formato de 24 hrs
var hour = date.getHours();

var textHour = `
    Día: ${day2}
    Mes: ${mes}
    Año: ${year}
    Hora: ${hour}
`;

console.log(textHour);