// 분할 정렬(merge sort)은 3단계로 나뉜다
// 분할 : 해결하고자 하는 문제를 작은 크기의 동일한 문제들로 분할
// 정복 : 각각의 작은 문제를 순환적으로 해결
// 합병 : 작은 문제의 해를 합하여(merge) 원래 문제에 대한 해를 구함
function mergeSort(A,start,end) {
    if(start < end){
        const half = Math.floor((start+end)/2);
        console.log("start : " + start + " half : " + half + " end : " + end);
        mergeSort(A, start, half);      // 앞 배열 정렬
        mergeSort(A, half + 1, end);    // 뒷 배열 정렬
        merge(A, start, half, end); // 합병
    }
}
function merge(A, start, half, end) {
    let i = start, j = half+1, k = start;
    let tmp = [];
    while(i <= half &&  j <= end){
        if(A[i] <= A[j]) tmp[k++] = A[i++];     // 왼쪽 원소가 더 작다면 왼쪽 배열에서 원소를 꺼낸다
        else tmp[k++] = A[j++];                 // 오른쪽 원소가 더 작다면 오른쪽 배열에서 원소를 꺼낸다.
    }

    while(i <= half)                            // 왼쪽 배열에서 원소가 남아있다면 차례대로 원소를 꺼낸다/
        tmp[k++] = A[i++];
    while(j <= end)
        tmp[k++] = A[j++];
    for(let i = start; i <= end; i++){
        ary[i] = tmp[i];
    }
}

let ary = [2,4,1,6,8,7,9,5,3];
mergeSort(ary,0,8);
console.log(ary);
//합병 정렬에 시간 복잡도T(n)은 
// n = 1일땐 0
// otherwise일 땐 T([n/2]) + T([m/2]) + n 이다
// 분할시간 + 정렬시간 + 합병시간 이다. 즉 O(nlogn)의 시간이 걸린다.