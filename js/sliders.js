$(document).ready(function(){
    $('.reviews__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        appendArrows: '.reviews__slider-arrows',
        prevArrow: '<svg class="slider-arrow slider-arrow__prev" height="40" width="40"><use xlink:href="img/icons.svg#arrow"></use></svg>',
        nextArrow: '<svg class="slider-arrow slider-arrow__next"  height="40" width="40"><use xlink:href="img/icons.svg#arrow"></use></svg>', 
        dots: true
      });
});