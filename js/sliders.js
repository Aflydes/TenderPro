$(document).ready(function(){
    $('.reviews__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        prevArrow: '.slider-arrow__prev',
        nextArrow: '.slider-arrow__next', 
        dots: true
      });
});