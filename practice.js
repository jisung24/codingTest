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

// let value = [4, 7, 12];
// let signs = [true, false, true]

// let sum = value.reduce((acc, cur, idx) => {
//     if(signs[idx] === false){
//         cur *= -1;
//     }
//     console.log(cur);
//     return acc + cur;
// }, 0)

// console.log(sum);

// 수 박 수 박..!! 

// 수 수 => 1 3 5 홀수 - 1
// let arr = [];

// arr[2n - 1] = "수"; // 이미 자리가 정해져있는.. 값들은 미리 이렇게 나눠서 식을 써줌..!! 
// arr[2n] = "박";

// // 3

// for(let i = 1; i <=3; i++){
//     arr[2n - 1] = "수";
//     arr[2n] = "박";
// }

// 수는 홀수...
// 박은 짝수...번째만 들어올 수 있어!! 
// 수 : 1,3,5,7,9
// 박 : 2,4,6,8,10

// 숫자 3 
// let arr = [];
// let number = 4; // "수 박 수" [1,2,3]

// for(let i = 0; 2*i <= number; i++){
//     if( i % 2 === 0){
//         arr.push("수");
//     }else{
//         arr.push("박");
//     }
// }
// console.log(arr);

// let str = "a234";
// // typeof Number가 아닌걸 찾아보자....!! 

// // isNaN(value) 이걸로 숫자인지 아닌지 판단한다...!!
// // console.log(isNaN("e")); // 숫자가 아님 => true
// // console.log(isNaN(4)); // 숫자가 맞음 => false

// for(let i = 0; i<str.length; i++){
//     if(isNaN(str[i]) === true){
//         console.log(`숫자가 아닌건 ${str[i]}`);
//     }else{
//         console.log('다 숫자야!');
//     }
// }


// "수박수박수박..." 문제풀이 완료! 


/**
 * 두 정수 left와 right가 매개변수로 주어집니다. 
 * left부터 right까지의 모든 수들 중에서, 
 * 약수의 개수가 짝수인 수는 더하고, 
 * 약수의 개수가 홀수인 수는 뺀 수를 
 * return 하도록 solution 함수를 완성해주세요.
 */


// 최대공약수 : G
// 최소공배수 : L
// 두 수 : num1, num2

// let arr = [1,1,3,3,0,1,1];

// let newArr = arr.filter((ele, idx) => {
//     if(ele[idx] !== ele[idx + 1]){
//         return ele;
//     }
// })

// console.log(newArr);


// 띄어쓰기 문자열 나온다..?? ==> 배열임. 
// let str = "3people unFollowed me"; 
// let strArr = str.split(' ').map((value) => {
//     // 내가 어떤 값을 control하는지 파악하는게 제일 중요함...!! 
//     // 만약 value[0]이 숫자거나 " "면 나머지 value.toLowerCase()
//     if(isNaN(value[0]) === false || value[0] === ""){
//         value.toLowerCase();
//     }else{ // 영어일경우!! 
//         value[0].toUpperCase();
//     }
// });

// A = [1, 4, 2];
// B = [5, 4, 4];
// 같은 idx위치에 있는 숫자를 더해서 []에 push하고 이거 더하자...!! 

let a = [1, 4, 2];
let b = [5, 4, 4];

let sumArr = a.reduce((acc, cur, idx) => {
    acc.push(cur * b[idx]); // cur값이랑 b[idx]값이랑 더한 값을 push 해줌! 
    // 아 먼저 집어넣는 코드를 쭉 짜놔야해! 
    console.log(acc, cur, idx);
    // acc가 일단 빈 배열이니까....
    return acc;
}, []).reduce((acc, cur) => {
    return acc + cur;
});
console.log(sumArr);


