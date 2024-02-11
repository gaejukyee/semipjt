$(function(){
    
    $('.main-menu > li').mouseenter(function(){
        $(this).find('.sub-menu, #sub-p').stop().slideDown();
        $(this).find('.sub-menu-bg').stop().slideDown();
    });

    $('.main-menu > li').mouseleave(function(){
        $(this).find('.sub-menu, #sub-p').stop().slideUp();
        $(this).find('.sub-menu-bg').stop().slideUp();
    });
    

    // sm 트리거 버튼
    $('#trigger').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.sm-main-menu').toggleClass('active');
    });
});

//sm 영역 메인메뉴
window.onload = function() {
    var subMenus = document.querySelectorAll('.sm-main-menu .sub-menu');
    subMenus.forEach(function(subMenu) {
        subMenu.parentElement.addEventListener('click', function(event) {
            event.preventDefault();
            subMenu.style.display = (subMenu.style.display === 'block') ? 'none' : 'block';
        });
    });
}
