// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, 
// B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다. 
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.

function solution(A, B) {
    for(let i = 0; i < A.length; i++){
        if(A[i] == B[i]) console.log("D");
        else if((A[i] == 1 && B[i] == 2)||(A[i] == 2 && B[i] == 3)||(A[i] == 3 && B[i] == 1)) console.log("B");
        else console.log("A");
    }
}

const A = [1,1,1,2,2,2,3,3,3];
const B = [1,2,3,1,2,3,1,2,3];
console.log(solution(A,B));