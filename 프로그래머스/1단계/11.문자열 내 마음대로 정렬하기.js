'use strict';

// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 
// 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 입출력 예
// strings	                n 	        return
// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]

// 풀이 방법 
// 저 index만 골라서 sort로 배열... 
// n번째 자리에 저 영어가 있는 문자대로 또 정렬...! 
// 알파벳 순 정렬.. ! 

let arr = ["sun", "bed", "car"];
let sa = arr.sort((a,b) => {
    if(a[1] > b[1]) {
        return a - b; // 1이 오름차순(작은 것 부터)
    }
});
console.log(sa);


let nums = [21,2,3,66,89];
let arr2 = nums.sort((a,b) => {
    // 즉 앞에꺼와 뒤에 수를 비교해서 작은 수를 앞으로 보냄 무조건. 
    return a - b;
    
})
console.log(arr2);

