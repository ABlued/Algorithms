// 현재 픽셀이 이 속한 blob의 크기를 카운트하려면
//     현재 픽셀이 image color가 아니라면
//         0을 반환한다.
//     현재 픽셀이 image color라면
//         먼저 현재 픽셀을 카운트한다(count = 1)
//         현재 픽셀이 중복 카운트 되는 것을 방지하기 위해 다른 색으로 칠한다.
//         현재 픽셀에 이웃한 모든 픽셀들에 대해서
//             그 픽셀이 속한 blob의 크기를 카운트하여 카운터에 더해준다.
//         카운터를 반환한다.
let table = [
    [1,0,0,0,0,0,0,1],
    [0,1,1,0,0,1,0,0],
    [1,1,0,0,1,0,1,0],
    [0,0,0,0,0,1,0,0],
    [0,1,0,1,0,1,0,0],
    [0,1,0,1,0,1,0,0],
    [1,0,0,0,1,0,0,1],
    [0,1,1,0,0,1,1,1]
];


const BACKGROUND_NUMBER = 0;
const IMAGE_COLOR = 1;
const ALREADY_COUNTER = 2;

function countCells(x,y) {
    let result;
    if(x < 0 || x >= table[0].length || y < 0 || y >= table.length) return 0;       //유효성 검사
    else if(table[x][y] !== IMAGE_COLOR) return 0;      // 이미 카운트 되었거나 백그라운드픽셀일 경우 카운트할 필요 없다.
    else {
        table[x][y] = ALREADY_COUNTER;
        return 1 + countCells(x - 1, y + 1) + countCells(x, y+1)+
        countCells(x + 1, y + 1) + countCells(x - 1, y) +
        countCells(x + 1, y) + countCells(x - 1, y - 1) +
        countCells(x, y - 1) + countCells(x + 1, y - 1); 
    }
}
function printTable(table) {
    for(let i = 0; i < table.length; i++){
        console.log(table[i]);
    }
}

printTable(table);
console.log(countCells(0,0));
console.log("-------------------------");
printTable(table);
// 인프런 강좌 링크 : https://www.inflearn.com/course/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%95%EC%A2%8C/lecture/4076?tab=curriculum