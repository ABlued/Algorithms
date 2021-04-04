// 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

function solution(n) {
    if(n < 12){
        if(n % 12 === 0)
            return 0;
        else 
            return 1;
    } else {
        return 1 + solution(n - 12);
    }
}

// 이렇게 푸는 것이 더 좋다.

function solution1(n) {
    return Math.ceil(n/12);
}

console.log(solution1(13));