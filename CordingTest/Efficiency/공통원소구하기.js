// A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로
// 그램을 작성하세요.

function solution1(A, B) {      // 이 방식은 이중포문이 사용되었으니 시간복잡도가 O(n^2)이다
    let CopyOfB = [...B];
    let result = [];
    
    A.map(v => {
        for(let i = 0; i < CopyOfB.length; i++){
            if(v === CopyOfB[i]){
                result.push(v);
                CopyOfB.splice(i,1);
                break;
            }
        }
    })
    return result.sort();
}

// 투 포인터 방식으로 하면 시간복잡도가 O(nlogn)이다 이 방식이 좋다 참고로 sort()함수는 O(nlogn)이다
function solution2(A,B) {
    let answer = [];
    A.sort();
    B.sort();
    let pA = pB = 0;
    while(pA < A.length && pB < B.length){
        if(A[pA] === B[pB]){
            answer.push(A[pA++]);
            pB++;
        } else if(A[pA] < B [pB]) pA++;
        else pB++;
    }
    return answer;
}

const A = [1,3,9,5,2];
const B = [3,2,5,7,8];
console.log(solution2(A, B));