'use strict';
// 진법 변환 문법익히기!! 
// 2,8,16 => 10으로... 

// 10 -> 2,3,8,16;

let number = 500; // 10진수가 있어! 
console.log(Number(number.toString(2)), typeof Number(number.toString(2))) // 2진법으로! 

console.log(number.toString(3)) // 3진법으로! 
console.log(number.toString(8)) // 8진법으로! 
console.log(number.toString(16)) // 16진법으로! 

// 2,3,8,16 => 10
let two = 1011;
console.log(Number.parseInt(two, 2));
// 숫자 뒤집기... !! => 문자열, 배열로 만든다음 뒤집어야해! 


// 자바스크립트는 문자열 뒤집는 함수는 존재하지않는다!!!!! 
// =====> 배열로 바꾸고 그걸 뒤집어야해!!!!!!!!

// 문제!!!
let n = 45;
let three = n.toString(3).split('').reverse().map((value => +value)).join("");
console.log(parseInt(three, 3));