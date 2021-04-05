// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

function solution(N,str) {
    let findIndex = str[0].length;
    let index = 0;
    str.map((v,i) => {
        if(findIndex < v.length) {
            index = i;
            findIndex = v.length;
        }
    })
    console.log();
    return str[index];
}
const number = 5;
const str = ["teacher","time","student","beautiful","sdfsdags","good"];
console.log(solution(number, str));