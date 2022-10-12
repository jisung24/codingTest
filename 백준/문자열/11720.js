'use strict';
// n개의 숫자가 문자열로 묶여있다. => 각 숫자의 합. 
// let input = require('fs').readFileSync('test.txt').toString().split('\n');
// let testCase = Number(input[0]);
// let strArr = input[1].split('').map((value) => +value).reduce((acc, curr) => acc + curr);

// console.log(strArr);
// 문자열을 쪼개서 배열로바꾸기! ==> 이 문장 기억해!! 

// ###### 정리 ######
// 1. 문자열을 쪼개서 배열로 만든다.! (split, map으로 형변환)
// 2. reduce로 acc에 누적값을 누적해가면서 문제를 풀어간다..! 

// => 일단 문자열을 배열로 바꿨음.. 안 바꿀 수 있는 방법도 있음. 

let str = "12345";
console.log(isNaN(str[0])); // false(숫자맞음)

// 문자열 반복문 돌리기! 

// forEach는 배열전용 반복문이라서 문자열에 forEach를 써줄 수 없다. 
// 따라서 문자열을 배열로 만든다. 

// 1. spread연산자..! 
// [...str].forEach((value) => {
//     console.log(value, typeof value); // type String임.
// })

// console.log([...str2]) ==> spread연산자! 
// ==> 그 무조건 문자 1개로 구분자가 설정됨. 
// let arr1 = str2.split(' ')
// console.log(arr1); 
// arr1.forEach((value) => {
    //     [...value].forEach((value, idx) => {
        //         if(idx === 0){
            //             value = value.toUpperCase();
//             console.log(value, idx);
//         }else{
    //             console.log(value, idx);
//         }
//         console.log(`여기 >> ${value}`);
//     })
//     console.log(value);
// })

let str2 = "hello my name is jisung!";
let str3 = str2.split(' ');
console.log(str3);
// 반복문 돌면서...
let str4 = str3.map((value, index) => {
    let first = value.slice(0,1).toUpperCase();
    let rest = value.slice(1); 
    value = first + rest;
    // value[0].toUpperCase(); // => 이건 적용이 안 돼! 

    // slice의 중요성 여기서 또 느낌...!! 
    // 빠이팅!
    return value;
})
console.log(str4);