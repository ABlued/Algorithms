// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하
// 는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출
// 력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.

function solution(ary) {
    let isPrime = [false, false];
    let result = [];
    const MAX = Math.max(...ary) + 1;
    for(let i = 2; i < MAX; i++){
        isPrime[i] = true;
    }
    for(let i = 2; i < MAX; i++){
        if(isPrime[i] !== false) {
            for(let j = i + i; j < MAX; j += i)
            isPrime[j] = false;
        }
    }

    ary.map(v => {
        const Temp = parseInt(v.toString().split('').reverse().join(''));
        if(isPrime[Temp] === true) result.push(Temp);
    })
    return result;
}

// 위의 함수도 맞는 답이지만 연산이 효율적이지 않다.
// 만약 입력배열에 10000이라는 숫자만 있어도 그것을 판별하기 위해 for문이 적어도 10000번 이상 수행되기 때문이다.
// 그래서 이러한 문제를 해결하기 위해 아래의 함수를 사용하는 것이 좋다.

function solution1(ary) {
    let answer = [];
    for(let x of ary){
        const res = Number(x.toString().split('').reverse().join(''));
        if(isPrime(res)) answer.push(res);
    }
    return answer;
}
function isPrimeFunction(num) {
    if(num === 1) return false;
    for(let i = 0; i <= parseInt(Math.sqrt(num)); i++){
        if(num % i === 0) return false;
    }    
    return true;
}

const ary = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(ary));

