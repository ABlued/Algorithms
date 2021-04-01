// 문자열의 길이 계산
// 문자열의 길이를 구할 때 일단 앞에 있는 문자 하나를 제거한다.
// 그리고 나머지 문자열의 길이 + 1 이 문자열의 길이이다.
function getLength(str) {
    if(str === ""){
        return 0;
    } else{
        return 1 + getLength(str.substring(1));
    }
}

// console.log(getLength('abcd'));

// 음이 아닌 정수 n을 2진수로 변환하여 출력

function printInBinary(n) {
    if (n < 2){
        console.log(n);
    } else{
        printInBinary(parseInt(n/2));       // n을 2로 나눈 몫을 먼저 2진수로 변환하여 인쇄한 후
        console.log(n%2);       // 짝수일 경우 0 홀수면 1
    }
}

// printInBinary(10);

// 배열의 합 구하기

function getArySum(n, ary) {
    if(n<=0)
        return 0;
    else 
        return getArySum(n - 1, ary) + ary[n - 1];      // ary[n - 1] : 마지막 데이터
}

// console.log(getArySum(6,[1,2,3,4,5,6]));
