'use strict';
const input = require('fs').readFileSync('test.txt').toString();
// 문자열 한 글자라서 배열로 바꿔줄 필요도 없어...!! 
console.log(input.charCodeAt());

// what is Ascii code? 
// 컴퓨터는 모든 data를 0과 1로만 인식을 한다.!! 
// 그럼 알파벳 a,b등 문자들은 어떻게 인식을할까? 
// 그 규칙을 나타낸 코드가 ascii code이다. 
// 각각의 문자를 나타내기 위해 7bits를 사용한다. 
// 2^7의 128개의 문자를 나타낼 수 있다. 

// EX) A = 65(1000001)

// js로 해당문자를 그 문자의 ascii code로 반환하기
// str.charCodeAt();