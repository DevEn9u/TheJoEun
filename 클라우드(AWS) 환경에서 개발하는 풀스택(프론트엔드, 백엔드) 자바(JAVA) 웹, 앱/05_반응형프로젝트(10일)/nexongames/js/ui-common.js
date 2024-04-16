$(function() {
// video slider
let mainVideoSlider = new Swiper('.main_video .swiper', {
  loop: true,
  speed: 500,
  autoplay: {
    // delay: 4000,
    // disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
 });
 
// $('main_video', )
})