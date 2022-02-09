$(document).ready(function(){
    $('.reviews__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        prevArrow: '.reviews__slider-arrow__prev',
        nextArrow: '.reviews__slider-arrow__next', 
        dots: true,
        appendDots: '.slick-dots__appear',
        responsive: [
            {
              breakpoint: 560,
              settings: {
                centerMode: true,
                variableWidth: false,
              }
            }
        ]
    });
      $('.projects__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        prevArrow: '.project__slider-arrow__prev',
        nextArrow: '.project__slider-arrow__next', 
      })
});