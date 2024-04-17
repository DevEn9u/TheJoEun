$(function() {
  $('#header .gnb').on('mouseenter', function() {
    $('#header').addClass('on');
  });
  $('#header').on('mouseleave', function() {
    $('#header').removeClass('on');
  });
  
  // 사이드 메뉴 작동
  $('#header .open_btn').on('click', function() {
    $('#header .m_gnb_wrap').addClass('on');
  });
  $('#header .close_btn').on('click', function() {
    $('#header .m_gnb_wrap').removeClass('on');
  });

  $('#header .m_gnb>li>a').on('click', function() {
    // 사이드 메뉴 list 클릭시 depth2 토글
    $(this)
      .parent()
      .toggleClass('on')
      .siblings()
      .removeClass('on');
  });





// video slider
let mainVideoSlider = new Swiper('.main_video .swiper', {
  // loop: true,
  // speed: 500,
  // autoplay: {
  //   delay: 1000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return (number < 10 ? '0' + number : number);
    },
    formatFractionTotal: function (number) {
      return (number < 10 ? '0' + number : number);
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
      ' / ' +
      '<span class="' + totalClass + '"></span>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 });

});