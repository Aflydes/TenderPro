$(document).ready(function(){
    
    if ($(window).width() <= '768'){
        $('.slider-disable').removeClass('slider-disable');
        $('.project__slider-arrows').show();
    }
    else{
        $('.your-slider').slick('unslick');
    }

    $('.header__search-icon--black').on('click', function(){
        $('.header__searchbar').show();
        $('.header__search').focus();
    });

    $('.header__search').on('blur', function(){
        $('.header__searchbar').hide();
    });

    $('.burger').on('click', function(){
        $('.burger').removeClass('_lock-animation');
        $('.burger').toggleClass('active');
        $('body').toggleClass('lock-scroll');
        $('.mobile-nav').toggleClass('active');
    });

});