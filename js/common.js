$(function(){
    
    $('#aaa').mouseenter(function(){
        $(this).find('.sub-menu').stop().slideDown();
        $(this).find('.sub-menu-bg').stop().slideDown();
        
    });
    $('#aaa').mouseleave(function(){
        $(this).find('.sub-menu').stop().slideUp();
        $(this).find('.sub-menu-bg').stop().slideUp();
    });
    $('#bbb').mouseenter(function(){
        $(this).find('.sub-menu').stop().slideDown();
        $(this).find('.sub-menu-bg').stop().slideDown();
    });
    $('#bbb').mouseleave(function(){
        $(this).find('.sub-menu').stop().slideUp();
        $(this).find('.sub-menu-bg').stop().slideUp();
    });
    

    $('#trigger').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.main-darkbox').toggleClass('active');
        $('#main-menu').toggleClass('active');
    });


});