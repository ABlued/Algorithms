// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
// 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.
// 알파벳 이외의 문자들의 무시합니다.
function solution(ary) {
    let parsedChar = ary.split("");
    let parsedString = [];
    let tmp = "";
    for(let i = 0; i < parsedChar.length; i++){
        const parsedAscliCode = parsedChar[i].charCodeAt(0);
        if((48 <= parsedAscliCode && parsedAscliCode <= 57)||(65 <= parsedAscliCode&& parsedAscliCode <= 90)||(97 <= parsedAscliCode && parsedAscliCode <= 122)){
            tmp += parsedChar[i];
        } else {
            parsedString.push(tmp);
            tmp = "";
        }
        
    }
    parsedString.push(tmp);
    console.log(parsedString); 
    for(let i = 0; i < Math.floor(parsedString.length/2); i++){
        console.log(parsedString[i] + "하고 "+parsedString[parsedString.length - i - 1]+"를 비교합니다");
        for(let j = 0; j < parsedString[i].length; j++){
            console.log(parsedString[i].substr(j,1).toLowerCase() + "하고" +parsedString[parsedString.length - i - 1].substr(parsedString[i].length - j - 1,1).toLowerCase() + "를 비교합니다");
            if(!(parsedString[i].substr(j,1).toLowerCase() === parsedString[parsedString.length - i - 1].substr(parsedString[i].length - j - 1,1).toLowerCase())){
                return "NO";
            }
        }
    }
    return "YES";
}

const str = "found7,time:study;abc/cba/Yduts;emit,7dnuof";
console.log(solution(str));

// 정규식을 쓸 때
function solution1(str) {
    str = str.toLowerCase().replace(/[^a-z]/g, '');
    if(str.split('').reverse().join(''!== str)) return "NO";
    return "YES";
}