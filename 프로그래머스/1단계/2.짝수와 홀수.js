'use strict';
// ⭐️ 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 짝수 홀수조건, 삼항연산자

let solution = (n) => {
    let result = n % 2 === 0 ? "Even" : "Odd";
    // 변수를 설정해서 값을 넣어주는 방식! 
    return result;
}

console.log(solution(5)); // odd
console.log(solution(6)); // even