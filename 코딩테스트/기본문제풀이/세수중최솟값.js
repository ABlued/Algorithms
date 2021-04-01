// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다)

function solution(a,b,c){       // 정렬 사용시
    let ary = [a,b,c];
    ary = ary.sort((a,b) => a - b);
    return ary[0];
}


function solution1(a,b,c){      // 정렬을 사용하지 않을 시(if문으로도 구현해도 되지만 귀찮다)
    const ary = [a,b,c];
    let min = 100;
    ary.map((v) => {
        if(min > v) min = v;
    });
    return min;
}
console.log(solution1(6,5,100));