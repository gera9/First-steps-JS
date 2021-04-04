'use strict'

//JSON - JavaScript Object Notation

var movie = {
    title: 'The Exorcist',
    year: '1973',
    country: 'USA'
};

//movies.country = "United States";


var movies = [
    {title: 'The Exorcist', year: '1973', country: 'USA'},
    {title: 'Halloween', year: '1973', country: 'USA'},
    {title: 'Alien', year: '1973', country: 'USA'}
];

var box_movies = document.querySelector("#movies");

for(var index in movies){
    var template = `
        Title: ${movies[index].title}
        Year: ${movies[index].year}
        Country: ${movies[index].country}
    `;

    console.log(template);
    var p = document.createElement("p");
    p.append(template);
    //p.append( + movies[index].year + movies[index].country);
    box_movies.append(p);   
}