'use strict'

//TIMERS
window.addEventListener('load', () => {
    function setIntervalFunction(){
        var time = setInterval(function(){
            console.log("Set interval executed");
            var header = document.querySelector("h1");
    
            if(header.style.fontSize == "50px"){
                header.style.fontSize = "20px"
            }else{
                header.style.fontSize = "50px";
            }
        }, 1000);
        return time;
    }

    var time = setIntervalFunction();

    //SetTimeout is exedcuted once
    var time2 = setTimeout(function(){
        console.log("Set interval executed");
        var header2 = document.querySelector("h2");

        if(header2.style.fontSize == "50px"){
            header2.style.fontSize = "20px"
        }else{
            header2.style.fontSize = "50px";
        }
    }, 500);

    //Stop setInterval
    var stopBtn = document.querySelector("#stop");
    stopBtn.addEventListener('click', function(){
        clearInterval(time);
    });

    //Start setInterval
    var startBtn = document.querySelector("#start");
    startBtn.addEventListener('click', function(){
        setIntervalFunction();
        
    });
});