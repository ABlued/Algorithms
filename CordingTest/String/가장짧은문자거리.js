// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출
// 력하는 프로그램을 작성하세요. 

function solution(str, findChar) {
    let indexAry = [];
    let result = [];
    str = str.split('');

    str.map((v,i) => {
        if(v === findChar) indexAry.push(i);
    })

    for(let i = 0; i < str.length; i++){
        let temp = [];
        for(let j = 0; j < indexAry.length; j++){
            temp.push(Math.abs(indexAry[j] - i));
        }
        result.push(Math.min(...temp));
    }

    return result.join(' ');
}

let str = "ILoveYou";
const findChar = "e";
console.log(solution(str, findChar));
str = str.split('').join(' ');
console.log(str);