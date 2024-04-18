// 메인슬라이더
$('.main_slider .page_num .total').text(
  $('.main_slider .swiper-slide').length
);

let mainSlider = new Swiper('.main_slider .swiper', {
  loop: true,
  // 슬라이드 이동 속도
  speed: 1000,
  // 마우스드래그, 모바일 swipe 끄기
  allowTouchMove: false,
  autoplay: {
    delay: 4000,
    // 슬라이더 내부 인터렉션발생시 자동재생 안멈추게
    disableOnInteraction: false,
  },
  pagination: {
    // 페이지네이션 클릭으로 이동
    clickable: true,
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      $('.main_slider .page_num .current').text(mainSlider.realIndex + 1);
    },
  },
});