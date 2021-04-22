// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 
// 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시
// 오. 단 반복횟수가 1인 경우 생략합니다.

function solution(str) {
    let result = "";
    let count = 1;
    for(let i = 1; i < str.length; i++){
        if(str[i] === str[i - 1]){      // 이전 수와 똑같은 수가 나왔을 경우
            count++;
        } else {
            if(count === 1){        // 이전 수와 다른 수가 나왔지만 처음일 경우
                result += str[i - 1];
            } else {                // 이전 수와 다른 수가 나왔지만 여러번 나왔을 경우
                result += str[i - 1] + count;
                count = 1;
            }
        }
    }
    // 마지막 수에 대한 처리
    if(count === 1){        
        result += str[str.length - 1];
    } else {
        result += str[str.length - 1] + count;

    }
    return result;
}

const str = "KKKHSSSSSSSE";
console.log(solution(str));