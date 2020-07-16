const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => lines.push(line));

function solve(input) {
  const N = Number(input[0]);
  for (let i = 1; i <= N; i += 1) {
    const P = Number(input[i]);
    if (P === 1) {
      console.log('Composite');
    } else if (P === 2) {
      console.log('Prime');
    } else {
      let quotient = 0;
      for (let j = 2; j < P; j += 1) {
        if (P % j === 0) {
          quotient += 1;
        }
      }
      if (quotient === 0) {
        console.log('Prime');
      } else {
        console.log('Composite');
      }
    }
  }
}

rl.on('close', () => solve(lines));
