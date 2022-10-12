'use strict';
let str = "try hello world"; 
// 쪼개서 배열로 일단 만든다...!!
let arr = ['h', 'e', 'l', 'l', 'o'];
// 홀수번째 index의 값들을 전부 UpperCase먹이기! 

// 배열 반복문 

// forEach자체는 애초의 배열을 바꾸지않는다...! 
// undefined를 return한다. 

// let arr2 = [1,2,3,4,5];
// arr2.forEach((value, index) => { // 어떤 작업을 하고싶을 때! 
//     if(index % 2 === 0){
//         // index가 짝수인 원소만 출력! 
//         console.log(value);
//     }
// })

let str2 = "try hello world";
let newArr = str2.split(' ').map((value, index) => {
    let chageStr = [...value].map((value, index) => {
        if(index % 2 === 0){
            return value.toUpperCase();
        }else{
            return value.toLowerCase();
        }
    })
    return chageStr.join(''); // 여기에 이제 수정돼서 값이 다 담겨...!!
    // map은 배열함수인만큼 배열을 return한다. 
    // 그러니 2차원 배열을 join('') 2번으로 문자열로 바꾸자...!!
})
console.log(newArr.join(' '));