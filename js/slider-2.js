$(document).ready(function(){
  $('.clients-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: '<div class="second-arrow second-arrow__right"></div>',
    prevArrow: '<div class="second-arrow second-arrow__left"></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: '<div class=" second-arroww second-arroww__next"> </div>',
          prevArrow: '<div class=" second-arroww second-arroww__prev"</div>'
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: '<div class=" second-arrowww second-arrowww__next"> </div>',
          prevArrow: '<div class=" second-arrowww second-arrowww__prev"</div>'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: '<div class=" second-arrowwww second-arrowwww__next"> </div>',
          prevArrow: '<div class=" second-arrowwww second-arrowwww__prev"</div>'
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: '<div class=" second-arrowwwww second-arrowwwww__next"> </div>',
          prevArrow: '<div class=" second-arrowwwww second-arrowwwww__prev"</div>'
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
	