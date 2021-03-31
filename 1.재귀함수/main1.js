// 재귀함수는 함수안에 자기를 다시 호출하는 함수이다.

// 재귀함수의 예
function func(){
    console.log("Hello");
    func();     //이렇게 아무조건없이 계속 자기함수를 호출하게 되면 함수가 무한으로 호출되어 스택오버플로우가 일어난다.
}

function func1(k){
    if(k <= 0)              // Base case : 적어도 하나의 recursion에 빠지지 않는 경우가 존재해야 한다.
        return;
    else{                   // Recursive case : recursion을 반복하다보면 결국 base case로 수렴해야 한다.
        console.log("k = " + k);
        func1(k - 1);       // k 1이 될경우 func1(0) 가 되고 이는 앞에 if문에서 return처리가 되니 함수가 종료된다.
    }
}

// func1(10);

// 1~n까지의 합을 구하는 함수   (문장 해석)
function func2(n){
    if(n == 0) 
        return 0;       // n = 0 이라면 합은 0이다.
    else 
        return n + func2(n - 1);    // n이 0보다 크다면 0에서 n까지의 합은 0에서 n - 1 까지의 합에 n을 더한 것이다.
}

// console.log(func2(2));

// 순환함수와 수학적귀납법
/**
 * 정리 func(n)은 음이 아닌 정수 n에 대해서 0에서 n까지의 합을 올바로 계산한다.
 * 증명 : 
 * 1. n = 0 인 경우 : n = 0인 경우 0을 반환한다.
 * 2. 임의의 양의 정수 k에 대해서 n < k인 경우 0에서 n까지의 합을 올바르게 계산하여 반환한다고 가정하자.
 * 3. n = k 인 경우를 고려해보면, func2은 먼저 func(k - 1) 호출하는데 2번의 가정에 의해서 0에서 k - 1 까지의 합이
 * 올바로 계산되어 반환된다. 메서드 func2은 그 값에 n을 더해서 반환한다. 따라서 메서드 func은 0에서 k까지의 합을 올바로 계산하여 반환한다.
 */

// 순환함수의 대표적인 예 : 팩토리얼
// 0! = 1
// n! = n x (n - 1) (n > 0)

function factorial(n){
    if(n == 0)
        return 1;
    else{
        return n * factorial(n - 1);
    }
}

// console.log(factorial(4));

// 순환함수의 대표적인 예 : x의 n승을 곱하는 수를 구하는 함수
// x의 0승은 1
// x의 n승은 x * x^(n-1) (n > 0)


function power(x, n){
    if(n == 0)
        return 1;
    else {
        return x * power(x, n - 1);
    }
}
// console.log(power(2,3));

// 순환함수의 대표적인 예 : 피보나치
// 피보나치0 = 0
// 피보나치1 = 1
// 피보나치n = 피보나치(n-2) + 피보나치(n-1) (n > 1)

function fb(n){     // 음수가 들어오면 안된다.
    if(n < 2)
        return n;
    else {
        return fb(n - 2) + fb(n - 1);
    }
}
console.log(fb(5));

// 최대공약수 구하기
// 유클리드 함수 : n <= m 두 양의 정수 m과 n에 대해서 m이 n의 배수이면 gcd(m,n) = n 이고, 그렇지 않으면 gcd(m, n) = gcd(n, m%n)이다.
function gcd(m, n){
    if(m<n){
        const tmp = m;
        m = n;
        n = tmp;
    }
    if(m%n == 0)
        return n;
    else   
        return gcd(n, m%n);
}
// 인프런 강좌 링크 : https://www.inflearn.com/course/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%95%EC%A2%8C/lecture/4072?tab=curriculum