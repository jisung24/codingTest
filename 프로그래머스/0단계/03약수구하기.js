'use strict';

// 수만큼 반복문 반복하기... 
// 가장 정석은 idx = 1하고 그 수까지 반복...!! 
// 이게 배열이 아니기때문에.. 반복문만 사용하면 돼!! 

// forEach , for-of, for-in, for 아무거나 사용하면 돼! 
// forEach는 배열반복문이니까... 
// 그냥 배열이 아니라면..! 굳이 배열로 만들어서하지말고,
// 그냥 for을 써...!  

// 문자열 내 p와 y의 개수...!! 
// reduce로 누적해서 값 구해보자!! 
// for와 count를 사용해서 해도 돼! 


// 하샤드! 

// let x = 10;
// let arr = x.toString().split('').map((value) => Number(value)).reduce((acc, cur) => acc + cur);

// if(x % arr === 0){
//     return console.log(true);
// }else{
//     return console.log(false);

// }


// 정수의 각 자리수!! ==> str => arr로 바꿔주는거 국룰...!! 
// 형변환까지 map으로 시켜주기!! 


let num = 10;

function solving(num){
    // 1. 짝수 => 2로 나눔. , 홀수 => 3을 곱하고 1을 더한다. 
    // 위 작업을 계속 반복하낟...!! 
    let count = 1; // 무조건 1번은 해야하니까! 
    while(true){
        if(num % 2 === 0){
            num = parseInt(num / 2);
        }else{
            num = (num * 3) + 1;
        }

        if( num === 1){
            console.log(`count >> ${count}`);
            break; // 나간다.!             
        }else{ 
            count++;
        }
    }

    return count;
}
console.log(solving(16));


