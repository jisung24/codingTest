// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
//n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// n = 121 return 144
// n = 3 return -1

// 루트 n이 실수가 아닌 정수가 나온다면 , pow로 다음수 제곱해주면 돼! 

function solution(n){
    if(Number.isInteger(Math.sqrt(n))){
        // 만약 루트한게 정수가 나온다면, 
        return Math.pow(Math.sqrt(n) + 1, 2);
    }else{
        return -1;
    }
}
console.log(solution(121));
console.log(solution(3));

// ⭐️ 1. 정수인지 실수인지 판단 
// - Number.isInteger() : 정수이면 true 아니면 false 
// - 그 외 다양한 Number class static method가 존재함.
// - ⭐️ % 연산자로 정수는 %1 하면 무조건 나머지가 0이나옴!!  

// 2. 제곱근 
// - 루트 : Math.sqrt(144) = 12
// - 제곱근 : Math.pow(10, n) => 10의 n제곱
