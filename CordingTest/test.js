// Node.js로 입출력받기 : https://velog.io/@exploit017/%EB%B0%B1%EC%A4%80Node.js-Node.js-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0
// https://wooooooak.github.io/node.js/2018/09/26/Node.js-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0/


// 입출력을 받는데는 두 가지 방법이 있다.
// 1 - 1 readline 모듈을 사용하기 (하나만 입력받을 때)
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//   output: process.stdout
// });

// rl.on('line', function(line) {
//     console.log(line);
    
//   rl.close();
// }).on("close", function() {
//   process.exit();
// });

// 1 - 2 readline 모듈을 사용하기 (여러 개 입력받을 때)
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//   input.push(line)
// })
//   .on('close', function () {
//   console.log(input);
//   process.exit();
// });

// 2 - 1 fs 모듈을 사용하기 (하나만 입력받을 때)

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// let num = Number(input);

// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

// 2 - 2 fs 모듈을 사용하기 (여러 개 입력받을 때)

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let count = input[0];
// let numbers = [];

// for (let i = 1; i < input.length; i++) {
//   if (input[i] !== '') {
//     numbers.push(input[i].split(' '));
//   }
// }

// for (let i = 0; i < numbers.length; i++){
//   let num1 = Number(numbers[i][0]);
//   let num2 = Number(numbers[i][1]);

//   console.log(num1 + num2);
// }