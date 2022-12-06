'use strict';

// 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 
// 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 
// 편지를 가로로만 적을 때, 
// 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.
let solution = (message) => {
    return 2 * message.length; // length는 공백문자도 포함한다. => 공백문자도 length 1을 갖고있다! 
}

console.log(solution("happy birthday!"));
console.log(solution('i love you~'));

// 다른 풀이 
// split이나 [...] spread연산자를 사용해서 배열로 만들고, 배열의 length를 return 

// 배열 idx는 수정이 가능한데, 문자열 idx는 only read! 

let str = "hello";
str[2] = "t";
console.log(str);