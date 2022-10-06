'use strict';
// let arr = [1,7,14,77,99,501];

// function solution(arr){
//     // let sum = arr.reduce((acc, curr) => {
//     //     return acc + curr;
//     // }) / arr.length;

//     // return sum;
//     console.log(...arr);
    
// }
// solution(arr);
// console.log(solution(arr))

// 그냥 arr 
// [ 1, 7, 14, 77, 99, 501 ]

// ...arr(스프레드 연산자!)
// 1 7 14 77 99 501

// spread연산자
// 연결, 복사 등의 용도로 활용도가 아주 높음..! 

// 1. 개별요소로 만들기...! => 배열을 개별요소로 만들기! 
let str = "kimjisung";
let arr = str.split('');
console.log(...arr);

// ### 2. 배열 합치기 : 서버에서 받아온 data로 이 작업하기에 유용하다! 
// -1) 기존 concat 
let arr2 = [4,5,6];
let arr3 = [10,11,12];
let arr4 = arr2.concat(arr3);
console.log(arr4); 

// -2) ES6 => Spread연산자..! 
// 배열을 개개별 element로 쪼갬..! 
let arr5 = [5,6,7];
let arr6 = [100,101,102];
let arr7 = [...arr5, ...arr6];

// -3) 배열 복사 
// --1) 깊은 복사 (원본까지 훼손이 돼서 사실 좋지는 않은 방법이야!)
// --> js에서 기존의 배열변수를 다른 변수에 할당해줄경우 깊게 참조한다.!! 
let arr8 = ["cpu1","cpu2","cpu3","cpu4"];

let arr9 = arr8; // (깊은복사..!)
arr9.push("cpu5"); // 복사된 배열에 값 넣어주기..! 
console.log(arr8, arr9); // arr8까지 값이 변함...!! ==> 깊은복사 완료! 

// --2) 얉은 복사
//    -1) slice or map함수를 이용해서 복사한다!
//        원본 훼손이 되지않아서 좋아! 
let arr10 = arr8.slice(0); //0부터 끝까지..! 
console.log(arr10);
arr10.push("cpu6");
console.log(arr10, arr9); // 다름! => 얉은복사 완료!

let arr_ = [1,2,3,4];
let arr_2 = arr_.map((value) => {
    return value; // value를 쭉 return해줌! 
})
arr_2.push(5);
console.log(arr_, arr_2); // 얉은복사!! 

//   -2) es6에서 추가된 spread문법!! 
let arr_3 = [5,6,7,8];
let arr_4 = [...arr_3]; 
arr_4.push(9);
console.log(arr_4, arr_3);

// 정리
// 깊은복사
// 다른 변수에 그 배열을 다시 재할당시켜주면 돼! 
// 방법 : 다른변수에 그 배열을 재할당!! 

// 얉은복사
// slice, map등 원본을 훼손시키지 않고 새로운 배열을 또 만드는 방법. 
// 방법 : slice, map, reduce, << spread문법 >>

// << spread >> 
// 배열 내의 값을 가지고 뭘 해주고싶을 떄!! 
// 객체도 가능하다..!! 

// 최대값, 최소값 구하기!! 
let newArr = [1,5,9,100, 54];
console.log(Math.min(...newArr)); //들어간 값중에서 최소값 선정! 
console.log(Math.max(...newArr)); //들어간 값중에서 최소값 선정! 
// 배열에서 값만 빼서 그냥 숫자들만 개별적으로 가져와서 쉽게 계산이 가능하다!! 

function rest(...newArr){
    // 배열들의 값...!! 
    let sprArr = [];
    sprArr.push(...newArr); // 값을 한꺼번에 넣을 수 있다.
    console.log(sprArr);
}
rest(...newArr); // 배열의 값들만 전부 넣어주고 
// 그 뒤에 값들을 배열로 감싸주면 1차원 배열이 됨...!! 



function solution(num_list) {
    num_list.reduce(([pCnt, yCnt], curr) => {
        return [
            curr === 'p' ? pCnt + 1 : pCnt,
            curr === 'y' ? yCnt + 1 : yCnt 
        ]
    }, [0,0])
}

console.log(solution(['p','p','o','o','o','y','y']));

// 배열이 문자열 원소로 이루어져있는데, 
// 이 배열 element들의 length를 각각 구하기..!! 
// 배열 원소에 공통적으로 length함수를 적용시켜준다.
// =====>> map함수 사용한다. !!

