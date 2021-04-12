// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.ㄴ

function solution(ary) {
    let max = 0;
    let result1 = 0, result2 = 0; result3 = 0; result4 = 0;

    for(let i = 0; i < ary.length; i++){
        result1 = 0, result2 = 0;
        for(let j = 0; j < ary.length; j++){
            result1 += ary[i][j];
            result2 += ary[j][i];
            if(i === j){
                result3 += ary[i][j];
            }
            if(i + j === 4){
                result4 += ary[i][j];
            }
        }
        max = Math.max(max, result1, result2)
    }
    max = Math.max(max, result3, result4);
    return max;
}

const ary = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
];
console.log(solution(ary));