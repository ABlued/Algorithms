function solution(str) {
    let count = 0;
    let stack = [];
    let i = 0;
    while(i < str.length){
        if(str.substr(i,1) === "("){
            if(str.substr(i + 1,1) === ")"){        // 레이저다!
                count += stack.length;
                i++;
            } else {                                // 그냥 쇠막대기다!
                stack.push("(");
            }
        } else {                                    // 쇠막대기가 끝났다!
            count++;
            stack.pop();
        }
        i++;
    }
    return count;
}
const str = "(((()(()()))(())()))(()())";
console.log(solution(str));