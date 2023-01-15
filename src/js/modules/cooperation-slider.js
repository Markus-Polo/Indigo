import $ from 'jquery'

$('.cooperation-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
})
