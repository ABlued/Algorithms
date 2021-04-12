// 첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력
// 된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데 
// 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다

function solution(ary) {
    const compare = [...ary].sort((a,b) => b-a);
    return ary.map((v) => compare.lastIndexOf(v) + 1);
}
const ary = [20, 120, 120, 120, 91, 87, 89, 92, 100, 120, 100, 76];
console.log(solution(ary));