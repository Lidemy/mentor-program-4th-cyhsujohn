const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => lines.push(line));

function solve(input) {
  const n = Number(input[0]);
  const star = '*';
  let printedStars = '';
  for (let i = 1; i <= n; i += 1) {
    printedStars += star;
    console.log(printedStars);
  }
}

rl.on('close', () => solve(lines));
