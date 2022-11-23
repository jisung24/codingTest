'use strict';
// ⭐️ 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 1. 각 반복문 단계에서 sum에 추가시켜주는 방법 ( ⭕️ )
// 2. 배열에 약수들을 집합시키고 reduce함수로 누적시켜 합을 구하는 방식 
function solution(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0) sum += i;
    }

    return sum; // 약수들의 합. 
}

console.log(solution(12)); // 1 2 3 4 6 12 => 28