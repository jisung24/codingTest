'use strict';
const input = require('fs').readFileSync('test.txt').toString().split('\n');
console.log(input);
const num = +((input[0].split(' '))[1]);

const arr = input[1]
.split(' ') // 문자열 -> 배열 
.map((value) => +value) // 배열의 모든 값을 정수로 바꿔줌. 
.filter((value) => value < num ); // filter로 num보다 작은 모든 수 배열로 반환해줌. 
console.log(arr.join(' ')); // 출력! 
// 배열로 출력하는게 아니라, 배열을 문자열로 " "로 구분해서 출력을 해줘야 백준에서 맞음. 
// 백준에서 배열로 출력하면 틀림.

//       (첼 시)
//   4 - 2 - 3 - 1 
//     (스트라이커)
// (은쿤쿠) 마운트  스털링 
//    ???   (라이스)
//쿠쿠 (그바)  포파나 제임스
//        케파 

// 영입생 : 은쿤쿠, 그바르디올, 라이스, 토르사르?, 
// => 라이스 + 패스되는 선수.... 

// ((의 개수만큼 )) 가 와야 한다.

function solution(s){
    console.log(`입력받은 s길이 >> ${s.length}`);
    let open = 0; // 여는 괄호 개수
    let close = 0;  // 닫는 괄호 개수 
    
    for(let i = 0; i < s.length; i++){
        if(s[0] === '('){
            if(s[i] === '('){
                open++;
            }else{
                close++;
            }
        }else{
            return false; // 무조건 false;
        }
    }
    console.log(`close >> ${close}, open >> ${open}`);
}
solution("()()");

// [0]번에는 무조건 ( 가 와야하고, 그 다음에 '