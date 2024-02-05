$(function(){
    
    $('.main-menu > li').mouseenter(function(){
        $(this).find('.sub-menu').stop().slideDown();
        $(this).find('.sub-menu-bg').stop().slideDown();
    });

    $('.main-menu > li').mouseleave(function(){
        $(this).find('.sub-menu').stop().slideUp();
        $(this).find('.sub-menu-bg').stop().slideUp();
    });
    
    
    // sm 트리거 버튼
    $('#trigger').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.main-darkbox').toggleClass('active');
        $('#main-menu').toggleClass('active');
    });
});