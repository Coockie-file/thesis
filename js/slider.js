$(document).ready(function(){
  $('.projects-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow-right arrow"></div>',
    prevArrow: '<div class="arrow-left arrow"></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: '<div class="arro0w-right arro0w"></div>',
          prevArrow: '<div class="arro0w-left arro0w"></div>',
        }
      },
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: '<div class="arro00w-right arro00w"></div>',
          prevArrow: '<div class="arro00w-left arro00w"></div>',
        }
      }
    ]
});
});