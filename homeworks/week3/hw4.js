const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => lines.push(line));

function solve(input) {
  const S = input[0];
  let reversed = '';
  for (let i = S.length - 1; i >= 0; i -= 1) {
    reversed += S[i];
  }
  if (reversed === S) {
    return console.log('True');
  }
  return console.log('False');
}

rl.on('close', () => solve(lines));
