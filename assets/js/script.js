$(document).ready(function(){
    $(window).on('load', function(){
        $('.hero-banner .banner-image').addClass('active');
    });

    $('.toggle-menu').click(function(){
        $(this).toggleClass('toggle-active');
    });
});