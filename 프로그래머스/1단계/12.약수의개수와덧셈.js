'use strict';
// 두 정수 left와 right가 매개변수로 주어집니다. 
// left부터 right까지의 모든 수들 중에서,  
//약수의 개수가 짝수인 수는 더하고,  
//약수의 개수가 홀수인 수는 뺀 수를 return 하도록 
// solution 함수를 완성해주세요.

// ❗️ 배열로 모든 수를 받아서... reduce를 사용해보기 
// ❗️ sum변수를 사용해, 그냥 조건문으로 += -=를 사용하기

function solution(left, right) { // 값이 deep copy됨. 
    let count = 0; // 약수의 개수
    for(let i = left; i <= right; i++) {
        for(let j=1; j<=left; j++) {
            if(left % j === 0) {
                console.log(`${i}의 약수 >> ${j}`);
                // 코딩테스트 복습
                count++;
            }
        }
        console.log(`${i}의 약수개수 >> ${count}`);
    }
}
solution(13,17);

