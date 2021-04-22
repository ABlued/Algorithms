// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다. 
// 만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205이 됩니다. 
// 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.

function solution(str) {
    let ary = "";
    for(let i = 0; i < str.length; i++){
        if(48 <= str.charCodeAt(i) && str.charCodeAt(i) <= 57){
            ary += str.substr(i,1);
        }
    }

    return parseInt(ary);
}
const str = "g0en2T0s8eSoft";
console.log(solution(str));

// 더 쉽게 푸는 방법도 있다.

function solution1(str) {
    let answer = "";
    for(let x of str){
        if(!isNaN()) answer += x;
    }
    return parseInt(answer);
}