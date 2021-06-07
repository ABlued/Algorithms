// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그
// 램을 작성하세요.
// 만약 N=5, M=5이고 수열이 다음과 같다면
// 1 3 1 2 3
// 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, 
// {1, 3, 1}로 총 10가지입니다.

function solution(ary, M) {
    let count = 0, sum = 0;

    ary.forEach((_,index) => {
        sum = 0;
        for(let i = index; i < ary.length; i++){
            sum += ary[i];
            if(sum <= M){
                // console.log("index : " + index + " ~ " + i + " sum : " + sum + " count : " + count);
                count++;
            } else break;
        }
    })
    return count;
}

const ary = [1,3,1,4,2,3];
const M = 6;

console.log(solution(ary, M));