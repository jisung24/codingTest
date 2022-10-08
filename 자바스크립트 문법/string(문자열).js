'use strict';
// Math함수도 아주 중요함....!!

// 1. 벡틱 : 여러 줄을 표현할 수 있고, 변수 ${}안에 넣기 가능. 

// 2. length : 문자열의 길이 (배열도 가능)
let str = "jisung";
console.log(`길이 >> ${str.length}`);
// => 문자열도 index로 접근가능. 
// 대신 한 글자만 바꾸는 거 허용x 

// 3. toUpperCase()/ toLowerCase()
// -> ex) pP같다고 취급할 때! 그냥 소문자나 대문자로 바꿔버려~
// => 모든 영어 문자열을 대문자, 소문자로 씀. 

// 4. str.indexOf(text)
// -> 찾은 문자의 index를 return한다..! 
// -> 여러개라도 가장 첫 번쨰 나온값의 idx를 return한다. 

// 5. slice(문자열 자르기) => 배열에도 있어!! 
let str2 = "dsdssdsdd";
let sliceStr = str2.slice(1,3); // idx1부터 2까지 2개! 
console.log(sliceStr) // sd
// 뒤에서부터 매우 중요해!! 

// 6. str.substr(n,m) => idx n번부터 m개! 
let str3 = "abcd";
console.log(str3.substr(0,3));

// 7. str.trim() => 문자열 앞 뒤 공백제거!! 
// => ex) email, pw공백제거... 
// => 공백문자까지 먹어버리면 안 되니까... 
let str4 = " jisung4012 ";
console.log(str4);
console.log(str4.trim());