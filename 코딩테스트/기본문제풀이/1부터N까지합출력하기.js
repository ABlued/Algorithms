// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

function solution(n) {
    if(n === 0)
        return 0;
    else  
        return n + solution(n - 1);
}

console.log(solution(6));
console.log(solution(10));

// 순환함수는 당연히 반복문으로도 바꿀 수 있다.

function solution1(n) {
    let result = 0;
    for(let i = 1; i <= n; i++){
        result += i;
    }
    return result;
}