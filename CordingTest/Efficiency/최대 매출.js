// 현수의 아빠는 제과점을 운영합니다. 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속
// 된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
// 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면 
// 12 15 11 20 25 10 20 19 13 15
// 연속된 3일간의 최대 매출액은 11+20+25=56만원입니다.
// 여러분이 현수를 도와주세요.

function solution(ary, K) {
    let sum = 0;
    for(let i = 0; i < K; i++){
        sum += ary[i];
    }

    for(let i = 0; i < ary.length - K; i++){
        if(ary[i] < ary[i + K]){
            let temp = 0;
            for(let j = i + 1; j < (i + 1) + K; j++){
                temp += ary[j];
            }
            sum = Math.max(sum, temp)
        }
    }
    return sum;
}

const ary = [12,15,11,20,25,10,20,19,13,15];
const K = 4;

console.log(solution(ary, K));