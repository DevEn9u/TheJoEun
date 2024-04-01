/**
 * Array (배열)
 * 복합자료형: 배열, 싱글턴객체, 함수, 생성자함수, 정규표현식객체, 내장형객체
 * 배열은 변화를 주면 안되기 때문에 const 변수로 선언
 * 배열은 자료구조중 큐구조(기차 느낌)를 가짐
 */

const fruits = ['사과', '배', '딸기'];
console.log(fruits);
console.log(typeof fruits);
console.log(fruits.length);
console.log(fruits[1]);

/**
 * 배열의 method
 * 1) push(): 배열의 맨 끝에 항목을 추가하고, 추가한 배열의 길이를 반환값으로 가짐
 * 2) pop(): 배열의 맨 끝에 있는 항목을 제거하고 삭제한 값을 반환
 * 3)
 * 4)
 */
// 1) push(): 배열의 맨 끝에 항목을 추가하고, 추가한 배열의 길이를 반환값으로 가짐
fruits.push('포도');
console.log(fruits.push('포도')); // 5
console.log(fruits); // ['사과', '배', '딸기', 포도];

// 2) pop(): 배열의 맨 끝에 있는 항목을 제거하고 삭제한 값을 반환
fruits.pop();
console.log(fruits.pop()); // 포도
console.log(fruits); // ['사과', '배', '딸기'];

console.log('-------------------------------');
/**
 * loop (반복문)
 */

// quiz 1. while 반복문으로 과일배열요소를 출력하시오(조건중심).
// 반복문은 잘못작성시 무한루프 발생
// i++등 식을 작성하여 제한을 둬야함
let i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
 i++;
}

