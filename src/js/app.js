import * as flsFunctions from './modules/functions.js'
import $ from 'jquery'
import '../../node_modules/bootstrap/js/src/collapse.js'
import '../../node_modules/bootstrap/js/src/dropdown.js'
import '../../node_modules/slick-carousel/slick/slick.js'
import './modules/rev-slider.js'

$('.rev-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
      },
    },
  ],
})
