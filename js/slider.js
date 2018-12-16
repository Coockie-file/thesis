$(document).ready(function(){
  $('.projects-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow-right arrow"></div>',
    prevArrow: '<div class="arrow-left arrow"></div>',
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
});
});