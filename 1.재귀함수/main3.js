// 재귀함수의 응용 : 미로찾기
// 현재 위치에서 출구짜기 가는 경로가 있으려면
// 1) 현재 위치가 출구이거나
// 2) 이웃한 셀들 중 하나에서 현재 위치를 지나지 않고 출구까지 가는 경로가 있거나

let maze = [
    [0,0,0,0,0,0,0,1],
    [0,1,1,0,1,1,0,1],
    [0,0,0,1,0,0,0,1],
    [0,1,0,0,1,1,0,0],
    [0,1,1,1,0,0,1,1],
    [0,1,0,0,0,1,0,1],
    [0,0,0,1,0,0,0,1],
    [0,1,1,1,0,1,0,0],
];
const PATHWAY_NUMBER = 0;
const WALL_NUMBER = 1;
const BLOCKED_NUMBER = 2;       // 방문해보았지만 막혀있는 길
const PATH_NUMBER = 3;          // 방문해보았지만 아직 막혀있는지 모르는 길

function findMazePath(x,y) {
    if(x < 0 || y < 0 || x >= maze[0].length || y >= maze.length){      // 유효성 검사
        return false;
    } else if (maze[x][y] != PATHWAY_NUMBER){      // 벽이거나 이미 찾은 길이라면 검사를 하지 않는다
        return false;
    } else if(x == 7 && y == 7) {    // 찾은 곳이 출구일경우 (본 미로는 maze[7][7]이 출구이다.)
        maze[x][y] = PATH_NUMBER;
        return true;
    } else {        // 출구는 아닌데 처음 와본 길일 경우
        maze[x][y] = PATH_NUMBER;
        if(findMazePath(x - 1,y) || findMazePath(x, y + 1) ||
        findMazePath(x + 1, y) || findMazePath(x, y - 1)){
            return true;
        }
        maze[x][y] = BLOCKED_NUMBER;
        return false;
    }
}
function printMaze() {
    for(let i = 0; i < maze.length; i++){
        console.log(maze[i]);
        console.log();
    }
}
printMaze(maze);
console.log("------------------------------");
findMazePath(0,0);
printMaze(maze);


// 인프런 강좌 링크 : https://www.inflearn.com/course/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%95%EC%A2%8C/lecture/4075?tab=curriculum