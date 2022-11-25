'use strict';
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 자릿수! 
// 문자열 -> 배열로 바꿔서 배열 각 원소의 합으로 풀어보자!! 


let num = 123;
console.log(num.toString().split('')); // split -> 문자열을 배열로! 

function solution(n){
    return n
    .toString()
    .split('')
    .map((value) => +value)
    .reduce((acc, cur) => acc + cur);
}
console.log(solution(1234567))

console.log((123+"").split(''));

// 문자열로 바꾸기 
// - 값.toString()
// - 값+""

console.log((true+"").split(''));