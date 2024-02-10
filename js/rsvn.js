$(function(){
    $('.rs-cafe-space').addClass('rs-active');

    $('#rs-type-A').click(function(e){
        e.preventDefault();
        $('.rs-pick').removeClass('rs-active');
        $('.rs-cafe-space').addClass('rs-active');
    });
    $('#rs-type-B').click(function(e){
        e.preventDefault();
        $('.rs-pick').removeClass('rs-active');
        $('.rs-room-space').addClass('rs-active');
    });
    $('#rs-type-C').click(function(e){
        e.preventDefault();
        $('.rs-pick').removeClass('rs-active');
        $('.rs-desk-space').addClass('rs-active');
    });
    
    $('.c-btn').click(function(){
        $('.rs-regi').toggleClass('rs-switch');
    });
});