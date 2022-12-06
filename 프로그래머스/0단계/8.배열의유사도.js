'use strict';
// ["a", "b", "c"]	["com", "b", "d", "p", "c"]

// arr1에 idx와 같은 원소를 return한다! 
// 원래는 2중배열! 

let arr = [777,789,252,117,554];
let arr2 = [252,117,0,4]; // arr과 arr2에 같은 원소가 몇 개가 있는지...!! => 2차원배열! 
let count = 0;
for(let i=0; i < arr2.length; i++){
    for(let j=0; j < arr.length; j++){
        if(arr2[i] === arr[j]) {
            count++; 
            console.log(`${arr2[i]}와 같은 수가 있습니다!`);
            break; // 1개라도 찾으면 돼! 
        }
    }
}
console.log(`두 배열에서 같은 값은 ${count}개!`);