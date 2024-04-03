window.addEventListener('DOMContentLoaded', function() {
  // header fixed
  const header = document.querySelector('#header')

  window.addEventListener('scroll', function() {
    let _scrollY = window.scrollY;

    if(_scrollY > 0) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });

  // language menu
  document.
  querySelector('#header .lang_btn')
  .addEventListener('click', function() {
    document.querySelector('#header .lang_wrap').classList.toggle('on');
  });

  // open_btn
  document.
  querySelector('#header .open_btn')
  .addEventListener('click', function() {
    // 처음 대상과 동일해서 this로 사용 가능
    this.classList.toggle('on');
  });
})


/** header fixed에서
 * 키워드를 변수명으로 하고 싶을 때 _ 붙이기
 * scrollY는 세로 스크롤바의 위치값
 *  document.querySelector('#header').classList.add('fixed');를 여러번 써야해서 변수에 담음: const header = document.querySelector('#header')
 * 
 * open_btn에서
 * document.querySelector('#header .open_btn').addEventListener('click', function() {document.querySelector('#header .open_btn')classList.toggle('on');
  });
}) 인데, 동일하기 때문에 this로 작성 가능한 것임
*/ 
/**
 * eventHandler에서 arrow function을 사용하게 되면 
 * this는 함수생성시점에서 바깥 부모함수의 this와 일치하게 된다.
 * open_btn의 코드에서   .addEventListener('click', function() {
    this.classList.toggle('on');
  }); 를 arrow function 사용하면 바깥쪽 eventhandler가 부모함수이므로 this가 window가 된다.
* 그러니 사용 x
*/ 