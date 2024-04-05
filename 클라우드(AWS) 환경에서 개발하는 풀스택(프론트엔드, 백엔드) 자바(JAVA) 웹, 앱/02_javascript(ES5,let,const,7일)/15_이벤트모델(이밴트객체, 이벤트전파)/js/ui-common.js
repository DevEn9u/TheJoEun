window.addEventListener('DOMContentLoaded', function() {
  /**
   * 고전이벤트: 이벤트 삭제, 추가 기능이 없으니 사용금지(onclick)
  document.querySelector('.test_btn').onclick = function() {
    console.log('안녕');
    alert('안녕');
  }
  */
  /**
   * 마우스 이벤트
   * mouseenter
   * mouseleave
   */ 
  document.
  querySelector('.test_btn').
  addEventListener('mouseenter', function() {
    this.innerHTML = '마우스 올라감';
  });

  document.
  querySelector('.test_btn').
  addEventListener('mouseleave', function() {
    this.innerHTML = '클릭이벤트 테스트';
  });

})