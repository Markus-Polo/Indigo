import * as flsFunctions from './modules/functions.js'
import '../../node_modules/bootstrap/js/src/collapse.js'
import '../../node_modules/bootstrap/js/src/dropdown.js'
import '../../node_modules/bootstrap/js/src/carousel.js'
import $ from 'jquery'
import '../../node_modules/slick-carousel/slick/slick.js'

$('.rev-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
})
