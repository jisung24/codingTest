'use strict';
// 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자!
// 첫 단어가 영어가 아니라면 그 다음 알파벳은 소문자로! 

let pattern = /[a-zA-Z]/; // 정규식 -> 영어인지 아닌지, test함수를 사용할 수 있다.
let value = 3;
let str = "U";

// console.log(pattern.test(str)); // 영어인지 아닌지 check
// console.log(pattern.test(value)); // 영어인지 아닌지 check

let test = "3people unFollowed me".split(' ');
// console.log(test); // 영어인지/

let map = test.map((value) => {
    let first = value.slice(0,1); // 3 .  u
    let last = value.slice(1);  // people nFollowed
    
    if(pattern.test(first)){
        // true일 경우
        // console.log(first.toUpperCase());
        first = first.toUpperCase();
        last = last.toLowerCase();
    }else{ // 영어가 아닌경우
        last = last.toLowerCase();
    }

    return first + last;
})


function solution(s){ // 3people unFollowed me
    let pattern = /[a-zA-Z]/; // 영어인지 아닌지 확인시켜주는 정규식
    let arr = s
    .split(' ') // 배열로 만들고, 
    .map((value) => {
        let first = value.slice(0, 1); // deep copy! => 원본 이상없음.
        let last = value.slice(1); // 1부터 끝까지! 

        if(pattern.test(first)){
            // 영어일 경우
            first = first.toUpperCase();
            last = last.toLowerCase();
        }else{
            last = last.toLowerCase();
        }

        return first + last; // 이게 value가 된다.
    })

    return arr;
}

console.log(solution("3people unFollowed me").join(" "));
// join(" ") : join안에 파라미터는 그걸 구분자로 배열을 문자열로 바꿔주는거야! 
// 