'use strict';
let arr = [0, -1, 5];
console.log(arr.sort((a,b) => a - b)); // 오름차순 정렬

// 무조건 내림시켜주는 Math class의 static 메서드..
console.log(Math.floor(arr.length / 2));