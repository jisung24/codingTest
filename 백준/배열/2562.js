'use strict';
const input = require('fs').readFileSync('test.txt').toString().split('\n');
const numberArr = input.map((value) => +value);
console.log(numberArr);
console.log(Math.max(...numberArr), numberArr.indexOf(Math.max(...numberArr)) + 1);

// 배열에서 원하는 값 찾기! 
// 그 값의 index를 찾기(몇 번째 그 수가 있는지...!!)
// Math.max(...arr), Math.min(...arr), arr.indexOf(원하는 값) 
// => indexOf(값) ==> 값이 없다면 return -1 