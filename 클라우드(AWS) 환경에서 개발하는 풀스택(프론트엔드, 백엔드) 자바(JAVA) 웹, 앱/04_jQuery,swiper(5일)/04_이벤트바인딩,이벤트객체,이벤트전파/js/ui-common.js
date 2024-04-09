$(function() {
  // 선택자가 동일하기 때문에 메서드 체인 가능
  // 하지만 이 dropdown방식은 너무너무너무 어색하기때문에 이런 방식이 있다는 것만 알고 사용 금지. css에서 max-height를 사용하면 부드럽게 처리 가능
  $('.gnb>li')
  .on('mouseenter', function() {
    $(this).find('.depth2').stop().slideDown()
  })
  .on('mouseleave', function() {
    $(this).find('.depth2').stop().slideUp()
  });

  // 버튼을 5번 클릭후 이벤트 삭제
  // off()
  let cnt = 0;
  $('#header .btn').on('click', function() {
    cnt++;
    $(this).text(cnt);
    
    if (cnt === 5) {
      $('#header .btn').off('click');
    };
  });

  // scrollTop(): js에서 scrollY property
  // trigger(): 이벤트 강제 실행
  // scroll 이벤트는 처음에 실행되지 않으므로 trigger('scroll')을 반드시 사용해줘야 함
  $(window).on('scroll', function() {
    let st = $(this).scrollTop();
    // console.log(st);
  })
  .trigger('scroll');

  // $(window).outerWidth(): 스크롤바를 포함한 가로길이, 일반적으로 사용. 
  // $(window).innerWidth(): 스크롤바를 제외한 가로길이
  $(window).on('resize', function() {
    let winW = $(this).outerWidth();
    // let winW = $(this).innerWidth();
    // console.log(winW);
  })
  .trigger('resize');
  // width()는 border, padding 제외
  // outerWidth()는 border, padding을 모두 포함
  // innerWidth()는 border 제외
  console.log($('#header .btn').width());
});