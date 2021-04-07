// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)

function solution(ary) {
    console.log(ary[0]);

    for(let i = 1; i < ary.length; i++){
        if(ary[i - 1] < ary[i]) console.log(ary[i]);
    }
}

const ary = [1,6,5,4,3,2,7];
solution(ary);