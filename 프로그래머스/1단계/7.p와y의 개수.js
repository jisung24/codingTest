'use strict';


function solution(s){
    let test = s
    .toUpperCase()
    .split('')
    .reduce((acc, cur) => {
        if(cur === 'P'){
            acc[0]++;
        }
        if(cur === 'Y'){
            acc[1]++;
        }

        return acc;
    }, [0, 0]); // 축약할 값의 형태를 미리 설정해놓는다.

    let result = test[0] === test[1] ? true : false;
    return result;
}

console.log(solution("pPoooyY"));
