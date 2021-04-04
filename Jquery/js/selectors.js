'use strict'
$(document).ready(function(){
    //ID Selector
    $('#red').css('background', 'red')
            .css('color', 'white');

    $('#yellow').css('background', 'yellow')
                .css('color', 'white');
    
    $('#black').css('background', 'black')
    .css('color', 'white');

    //Class Selector
    var myClass = $('.styles');

    //eq selects an element of an array
    //console.log(myClass.eq(0));

    myClass.css('border', '5px dashed black');

    $('.clic').click(function(){
        $(this).css('background', 'green')
            .css('color', 'white');
    });

    //Tag Selector
    var ps = $('p');
    console.log(ps);
    ps.click(function(){
        var myThis = $(this);
        if(myThis.hasClass('styles')){
            myThis.removeClass('styles');
        }else{
            myThis.addClass('styles');
        }
    });
});