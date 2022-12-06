'use strict';

const number = 20; 
let count = 0;
function solution(n) {
    for(let i = 2; i <= n; i++) { // 어차피 1은 모든수의 약수기때문에, +1 해주면 돼! 
        if(n % i === 0){
            count++; // 약수가 있다면 count를 1증가! 
        }
    }

    return count + 1; // 1은 모든 수의 약수이기 때문이다!! 
}

console.log(solution(20));