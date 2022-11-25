'use strict';
//  정수를 담고있는 배열 arr의 평균값을 return하는 함수 solution을 완성해보세요. 

// 아 arr은 배열인데 애초에 arr로 파라미터를 전달하면. 
// 객체 type이어서 주소값이 전달이 됨. 
// 그래서 함수에서 파라미터로 그냥 그 주소값 solution(arr)로 전달해도 그 배열이 전달됨. 

// 근데 애초에 호출할 때 solution(...arr) => 그럼 배열들의 값들이 전달 돼! 
// 함수에서 파라미터를  ...arr로 돼 있다면 값들을 받아서 배열로 만들어주겠다!! 
// 근데 그냥 arr로 돼 있다면 배열 자체를 받겠다... 가 된다.

// ⭐️ case1 : ...arr을 파라미터로 => 얘는 호출할 때 값으로 받아서 배열로 만든다. 
    let arr = [1,2,3,4];
    let solution = (...arr) => {
        return (arr.reduce((acc, cur, _, array) => acc + cur )) / arr.length;
    }
    console.log(solution(...arr)); // 값으로 전달한다. 
    // 파라미터가 ...arr이면 값을 받아서 배열로 만들어준다.

// ⭐️ case2 : 그냥 arr배열 자체를 받는다. 
    let _arr = [ 5, 5 ];

    function solution_(_arr){
        return (_arr.reduce((acc, cur) => acc + cur)) / _arr.length;
    }

    console.log(solution_(_arr));

// 파라미터 -> 그냥 배열이름 -> 얕은복사(주소값이 전달)
// -> 함수(...arr)은 몇 개인지 모르는 값을 여러 개 입력받아서 배열로 만들어준다는 의미

// solution(arr)은 배열 주소값 자체를 얕은복사로 전달받는다는 소리고,
// solution(...arr)은 여러개의 값을 입력받아서 배열로 만들어준다는 의미

function test(...arr){
    return arr;
}
console.log(test(7,9,11,20)); // 이런식으로 값을 입력받는다는 소리
// 요약 ...는 값을 arr은 배열 자체를!!!