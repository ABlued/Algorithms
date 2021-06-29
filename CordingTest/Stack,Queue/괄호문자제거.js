// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 
// 프로그램을 작성하세요.

function solution(str) {
    let stack = [];
    let result = "";

    for(let v of str){
        if(v === "("){
            stack.push("(");
        } else if(v === ")"){
            stack.pop();
        } else if(stack.length === 0){
            result += v;
        }
    }

    return result;
}

const str = "(A(BC)D)EF(G(H)(IJ)K)LD(M)C(N)A";
console.log(solution(str));