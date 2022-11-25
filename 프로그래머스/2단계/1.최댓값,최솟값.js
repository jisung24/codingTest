'use strict';
// 최댓값, 최솟값 구하기
// - Math.max(...arr)
// - Math.min(...arr)

function solution(s){
    let arr = s.split(" ").map((value) => +value);

    return `${Math.min(...arr)} ${Math.max(...arr)}`
    // 그냥 arr이 들어가게 되면 주소값이 들어가서 안 됨.
}

console.log(solution("1 2 3 4"));

// sort로!! => ( 오름차순 한 다음 처음값과 끝값을 출력해주면 돼 )
let arr = [5, 3, 1, 7];
let sort = arr.sort((a, b) => a - b);
console.log(`최솟값 >> ${sort[0]}`);
console.log(`최댓값 >> ${sort[sort.length - 1]}`);
