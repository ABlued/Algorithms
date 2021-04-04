// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 
// 프로그램을 작성하세요.

function solution(str) {
    let result = str.split('');
    for(let i = 0; i < result.length;i++){
        if(result[i] === "A") result[i] = "#";
    }
    return result.join('');
}
const str = "BANANA";
console.log(solution(str));

function solution1(str) {
    let answer = "";
    for(value of str){      // 문자열도 for of 순회탐색이 가능하다.
        if(x==='A') answer += '#';
        else answer += value;
    }
    return answer;
}

function solution2(str) {
    let answer = str;
    answer = answer.replace(/A/g, '#');
    return answer;
}