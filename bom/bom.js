'use strict'

//Browser Object Model (BOM)
//Height and Width of the zone where the websites are displayed

function getBom(){
    console.log(window.innerHeight, window.innerWidth);
    //Get the heigh and width of the display
    console.log(screen.width); 
    console.log(screen.height);
    //Get the actual url and more
    console.log(window.location.href);
}

function redirect(url){
    window.location.href = url;
}

function openWindow(url){
    window.open(url, "", "width=400, heigh=300");
}

//redirect("https://www.google.com");
//getBom();