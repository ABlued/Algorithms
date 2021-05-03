// 선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다. 
// 학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라
// 고 했습니다. 선생님이 가지고 있는 예산은 한정되어 있습니다. 
// 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
// 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 
// 할인에 포함되지 않습니다.
function solution(limit, input) {
    let ary = [...input];
    ary = diviedMax(ary);

    
    while(limit < getSum(ary)){
        ary = removeMax(ary);
        ary = diviedMax(ary);
    }
    return ary.length;
}

function removeMax(ary) {
    let sumOfAry = [];
    for(let i = 0; i < ary.length; i++){
        let sum = 0;
        for(let j = 0; j < ary[i].length; j++){
            sum += ary[i][j];
        }
        sumOfAry.push(sum);
    }
    let max = Math.max(...sumOfAry);
    let index = sumOfAry.indexOf(max);
    ary.splice(index,1);
    console.log("max : " + max);
    console.log(ary);    
    return ary;
}
function diviedMax(ary) {
    let max = 0;
    for(let i = 0; i < ary.length; i++){
        max = Math.max(ary[i][0], max);
    }
    for(let i = 0; i < ary.length; i++){
        if(ary[i][0] === max){
            ary[i][0] /= 2;
            break;
        }
    }
    console.log("divideMax한 결과 : " + ary);
    return ary;
}
function getSum(ary) {
    let sum = 0;
    for(let i = 0; i < ary.length; i++){
        for(let j = 0; j < ary[i].length; j++){
            sum += ary[i][j];
        }
    }
    console.log("sum : " + sum);
    return sum;
}

const limit = 28;
const ary = [
    [1,5],
    [2,4],
    [3,3],
    [4,2],
    [5,4],
    [6,3]
];
console.log(solution(limit,ary));


// 상품과 배송비를 합친 값을 정렬 -> 쿠폰을 쓰는 경우를 모두 구해본다.(비싼 상품만 할인되는 경우만 고려하지 않는다.)


function solution1(limit, ary) {
    let answer = 0;
    let n = ary.length;
    ary.sort((a,b) => (a[0] + a[1] - (b[0] + b[1])));
    for(let i = 0; i < limit; i++){
        let money = limit - (ary[i][0]/2 + ary[i][1]);
        let count = 1;
        for(let j = 0; j < limit; j++){
            if(j!==i && ary[j][0] + ary[j][1] > limit) break;
            if(j!==i && ary[j][0] + ary[j][1] <= limit){
                limit -= (ary[j][0] + ary[j][1]);
                count++;
            }
        }
        answer = Math.max(answer, cnt);
    }

    return answer;
}