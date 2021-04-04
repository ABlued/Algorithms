// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
// 삼각형의 가장 긴 변은 다른 두변의 길이의 합보다 작아야 한다.

function solution(a,b,c){
    let ary = [a,b,c];
    ary.sort((a,b) => a - b);
    if(ary[2] < ary[0] + ary[1]){
        return "YES!"
    } else {
        return "NO!"
    }
}

console.log(solution(7,6,11));      // YES!
console.log(solution(13,33,17));      // NO!