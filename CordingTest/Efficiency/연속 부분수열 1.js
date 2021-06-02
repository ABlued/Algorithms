// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 
// 작성하세요.
// 만약 N=8, M=6이고 수열이 다음과 같다면
// 1 2 1 3 1 1 1 2 
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.

function solution1(ary, M) {
    let result = [];
    let temp = [];

    ary.map((_,index) => {
        let sum = 0;
        for(let i = index; i < ary.length; i++){
            sum += ary[i];
            temp.push(ary[i]);
            if(sum === M){
                result.push(temp);
                temp = [];
            } else if (M < sum){
                temp = [];
                break;
            }
        }
    })
    return result.length;
}

const ary = [1,2,1,3,6,1,1,1,2];
const M = 7;

console.log(solution2(ary,M));

function solution2(ary, M) {
    let count = 0, lt = 0, rt = 0, sum = 0;
    sum += ary[rt];

    while(rt !== ary.length){
        if(sum === M){
            count++;
            sum -= ary[lt++];
        } else if(M < sum){
            sum -= ary[lt++]
        } else {
            sum += ary[++rt];
        }
    }
    return count;
}