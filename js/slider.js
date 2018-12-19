$(document).ready(function(){
  $('.projects-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow arrow_right"></div>',
    prevArrow: '<div class="arrow arrow_left"></div>',
    responsive: [
  {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll:2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    }
  ]
  });
});