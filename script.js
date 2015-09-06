// $(document).ready(function(){
//     $('.button').hover(function(){
//         $('.button').css('background-color', 'red');
//     });
// });

$(document).ready(function(){
    $('#box').focusin(function(){
        $('#box').css('border', '1px solid #93bdfa');
    });
});
$(document).ready(function(){
    $('#box').focusout(function(){
        $('#box').css('border', '1px solid #ccc');
    });
});
