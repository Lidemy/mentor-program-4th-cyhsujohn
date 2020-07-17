const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => lines.push(line));

function solve(inputO) {
  const M = Number(inputO[0]);
  const input = [];
  for (let i = 1; i <= M; i += 1) {
    input.push(inputO[i].split(' '));
  }
  for (let j = 0; j < input.length; j += 1) {
    let a = input[j][0].length;
    let b = input[j][1].length;
    if (a === b) {
      [a, b] = [input[j][0], input[j][1]];
    }
    const isBigOrSmall = input[j][2];
    if (isBigOrSmall === '1') {
      if (a > b) {
        console.log('A');
      } else if (a < b) {
        console.log('B');
      } else {
        console.log('DRAW');
      }
    } else if (a > b) {
      console.log('B');
    } else if (a < b) {
      console.log('A');
    } else {
      console.log('DRAW');
    }
  }
}

rl.on('close', () => solve(lines));
