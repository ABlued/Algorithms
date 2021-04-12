// 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자
// 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 
// 있는 지 알아내는 프로그램을 작성하세요. 
// 격자의 가장자리는 0으로 초기화 되었다고 가정한다.

function solution(ary) {
    let result = 0;
    for(let i = 1; i < ary.length - 1; i++){
        for(let j = 1; j < ary[i].length - 1; j++){
            getMax(i,j,ary);
        }
    }
    for(let  i = 0; i < table.length; i++){
        table[i].map((v) => {
            if(v == 1) result++;
        })
    }
    return result;
}
function getMax(x,y,ary) {
    let currentValue = ary[x][y];
    // if(x < 0 || y < 0 || ary.length < x || ary.length < y) return 0;
    if(table[x][y] !== unKnown) ;
    else if(table[x - 1][y] == isMax || table[x][y - 1] == isMax || table[x + 1][y] == isMax || table[x][y + 1] == isMax) {
        table[x][y] = isNotMax;
    }
    else if(ary[x - 1][y] < currentValue && ary[x][y - 1] < currentValue && ary[x + 1][y] < currentValue && ary[x][y + 1] < currentValue){
        table[x][y] = isMax;
        table[x - 1][y] = isNotMax;
        table[x][y - 1] = isNotMax;
        table[x + 1][y] = isNotMax;
        table[x][y + 1] = isNotMax;
    }
}
function printTable(table) {
    for(let i = 0; i < table.length; i++){
        console.log(table[i]);
    }
}
const ary = [
    [0,0,0,0,0,0,0],
    [0,5,3,7,2,3,0],
    [0,3,7,1,6,1,0],
    [0,7,2,5,3,4,0],
    [0,4,3,6,4,1,0],
    [0,8,7,3,5,2,0],
    [0,2,9,5,7,11,0],
    [0,0,0,0,0,0,0]
];
let table = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
]
const unKnown = 0;
const isMax = 1;
const isNotMax = 2;
printTable(table);
console.log(solution(ary));
printTable(table);