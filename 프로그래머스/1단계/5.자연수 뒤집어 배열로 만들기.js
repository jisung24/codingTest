'use strict';

// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

function solution(n){
    return n
    .toString()
    .split('')
    .reverse() // 완전히 뒤집어주는 역할! 
    .map((value) => +value)
}

console.log(solution(12345))

let arr = [1,2,3,4,5];
console.log(arr.sort((a,b) => b-a));

// 자연수 뒤집는 방법 
// -> 문자열 
// -> 배열로 만들기 (자! 배열로 만들려면 문자열로 일단 만들어야하기 때문에, toString()을 사용해준다. )
// -> 배열에 reverse() 
// -> 배열에 sort.. (일단 map으로 +형변환을 해줘야한다.)

// 값을 배열을 만드려면 무조건 문자열을 만들고나서 split을 써야해!!! 

// let num = 2424224;   // num은 객체도 아니고 그냥 primitive변수야. 
// console.log(...num); // iterable객체만 스프레드 연산자를 사용할 수 있음.
