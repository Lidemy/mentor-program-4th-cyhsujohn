const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => lines.push(line));

function solve(input) {
  const num = input[0].split(' ');
  const n = Number(num[0]);
  const m = Number(num[1]);
  for (let i = n; i <= m; i += 1) {
    const sepNum = String(i);
    let sum = 0;
    for (let j = 0; j < sepNum.length; j += 1) {
      sum += Number(sepNum[j]) ** sepNum.length;
    }
    if (sum === i) {
      console.log(i);
    }
  }
}

rl.on('close', () => solve(lines));
