// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

function solution(str) {
    let stack = [];
    for(let v of str){
        if(!isNaN(v)) stack.push(v);
        else{
            let v1 = parseInt(stack.pop());
            let v2 = parseInt(stack.pop());
            if(v === '+') stack.push(v2+v1);
            else if(v === '-') stack.push(v2-v1);
            else if(v === '*') stack.push(v2*v1);
            else if(v === '/') stack.push(v2/v1);
        }
    }
    return parseInt(stack.pop());
}

const str = "352+*9-";
console.log(solution(str));