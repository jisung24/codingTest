'use strict';
// 복습! 배열은 iterable객체 => for..of , spread연산자, 구조분해 할당 사용가능함. 

// 길이가 같은 배열이 있다. 
// ex) [5, 10, 10], [4, 3, 7];
// 배열의 각 숫자를 곱해서 더한다. => 최솟값을 구해라. 
// 단) 같은 위치의 배열을 또 곱할 수는 없음.

let solution = (arr1, arr2) => {
    // 배열 2개를 입력받음. 
    // 전에는 내가 합친다는 공식을 사용했는데,... 왜 그랬지..... 
    // 일단 대충 reduce를 사용함 -> 초기값을 0으로 줌
    let desArr = arr1.sort((a, b) => a - b);
    let ascArr = arr2.sort((a, b) => b - a);
    let sum = 0;
    for(let i = 0; i < arr1.length; i ++){
        sum += (arr1[i] * arr2[i]);
    }
    // reduce함수를 사용해도 괜찮음.
    return sum;
}
console.log(solution([1,4,2], [5,4,4]));
console.log(solution([1,2], [3,4]));

// 가장 작은 값 * 가장 큰 값을 하면 최솟값이 만들어짐. => 다 더하면 만들어짐 
// 123 432
// => 16
// 234 321