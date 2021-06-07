// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
// 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

function solution(str1,str2) {
    let map1 = new Map();
    let map2 = new Map();
    let count = 0;
    for(let i = 0; i < str2.length; i++){
        map1.add(str1.substr(i,1));
        map2.add(str2.substr(i,1));
    }
    if(compare(map1,map2) === 0) count++;
    for(let i = str2.length; i < str1.length; i++){
        map1.add(str1.substr(i,1));
        map1.sub(str1.substr(i - str2.length, 1));
        if(compare(map1,map2) === 0) count++;
    }
    return count;
}

Map.prototype.add = function(value){
    if(this.has(value)) this.set(value, this.get(value) + 1);
    else this.set(value, 1);
}
Map.prototype.sub = function(value){
    if(this.has(value)) this.set(value, this.get(value) - 1);
    else return -1;
}
const compare = function(map1, map2){
    for(let [key, value] of map2){
        if(value !== map1.get(key)) return -1;
    }
    return 0;
}

const str1 = "aaaadaaaadaaaa";
const str2 = "aaaaa";

console.log(solution(str1,str2));
