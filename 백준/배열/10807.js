'use strict';
const input = require('fs').readFileSync('test.txt').toString().split('\n');
// console.log(input);
const cout = +(input[0]);
// console.log(`입력받은 정수 개수 >> ${cout}`);
const arrs = input[1].split(' ').map((value) => +value); 

const num = +(input[2]); 


// num이 arrs에서 몇 개인지 찾기!! 
let findNum = arrs.filter((value) => value === num);
console.log(findNum.length);