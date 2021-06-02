// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램
// 을 작성하세요.

function solution1(A,B) {
    return [...A,...B].sort();  // sort()는 nlogn의 시간을 갖게된다.
}
function solution2(A, B) {
    let i = 0, j = 0;
    let result = [];
    while(A[i] !== undefined && B[j] !== undefined) {
        if(A[i] <= B[j]){
            result.push(A[i++])
        } else {
            result.push(B[j++]);
        }
    }
    while(A[i] !== undefined) result.push(A[i++]);
    while(B[j] !== undefined) result.push(B[j++]);
    return result;
}

const A = [2,3,4,5,11,11,11,11];
const B = [1,2,3,6,7,9,12];
console.log(solution2(A,B));

// 더욱 빠른 알고리즘으로 풀어보기 시간복잡도는 n + m (투 포인터 방식)