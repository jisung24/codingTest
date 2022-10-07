'use strict';

// 둘 중 어떤게 더 작은 수 일지 모를 때!!
// => 작은 값을 넣는 변수를 만들어서 => Math.min을 통해 넣어준다...!! 
// => 큰 값도 마찬가지로...!! 

// => 분명 Math객체를 사용하면 반드시 숫자를 쉽게 구해낼 수 있다. 


// 배열에서 특정값, 위치 찾기..!! 

// 1. indexOf

// let arr = ["hello", "me", "gogo"];

// function findStr(str){
//     let idx = arr.indexOf(str);

//     return idx;
// }


// 2. find((ele) => return ele === 3)
// - 배열안의 특정한 값을 찾는다. 
// - 그 값이 여러개면 맨 앞에꺼 1개만 찾아준다....!!!!! 
// - (그에 반해 filter는 여러 개 다 찾아서 arr로 return해준다.)

// 3. findIndex((ele, idx, arr) => return ele === 3);
// - return값을 만족시키는 첫번째 값의 idx만 반환! 
// - find계열 함수는 무조건 하나의 값만 return한다...!! 

// 4. filter

// 비교해보자

// let arr = [1,1,2,3,4,5,6,6,6,9,9,9,9,9,9];

// let findNine = arr.find((ele) => {
//     return ele === 9;
// })

// let findIndex = arr.findIndex((ele, idx, arr) => {
//     return ele === 1;
//     // 값으로 idx찾기!!! 
//     // findIndex, indexOf
// })

// let filterArr = arr.filter((ele, idx) => {
//     return ele === 9;
// })
// console.log(findIndex)
// console.log(filterArr); //arr도 typeof찍으면 obj로 나옴.!



// let phoneArr = phoneNum.split('').map((value) => Number(value)); // 전부 숫자 배열로! 
// let star = phoneArr.slice(0, -4).map((value) => "*");
// let behind = phoneArr.slice(-4); 
// console.log(star, behind);

// 변경!!! 

// ===== << replace함수 적용! >> =====  
// replace : 문자열을 다른 문자열로 대체한다..!! 
// ===> 대소문자 구분없는 text로도 변경가능...!! 

// repeat!!!!!!!!!!! => 특정글자 반복!! 

// 문자열 함수 공부해보자! => 분명 replace말고도 쓸만한 함수 많음. 

// let phoneNum = "01092876446";

// let hideNumber = "*".repeat(phoneNum.length - 4) + phoneNum.slice(-4);
// console.log(hideNumber);

// string function 아주아주 중요!! 

// 배열 내에서 가장 작은 수 제거한 배열 return

// filter, Math.min(...arr)사용..!! 

// return ele !== Math.min(...arr)

let value = [4, 7, 12];
let signs = [true, false, true]

let sum = value.reduce((acc, cur, idx) => {
    if(signs[idx] === false){
        cur *= -1;
    }
    console.log(cur);
    return acc + cur;
}, 0)

console.log(sum);