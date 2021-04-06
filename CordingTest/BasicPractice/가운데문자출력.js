// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요
// 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

function solution(str) {
    const strLen = str.length;
    let result = '';
    if(strLen % 2 === 0){
        result += str[Math.ceil(strLen/2) - 1];
        result += str[Math.ceil(strLen/2)];

    } else {
        result += str[Math.ceil(strLen/2) - 1];
    }
    return result;
}

const str = "gabbccccg";
console.log(solution(str));