let n = 10;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a number n: ", (num) => {
  n = parseFloat(num);
  console.log(
    `Fibonacci no ${num} (recursive method) is: ${
      Number.isInteger(n) && n >= 0 ? recursiveFibonacci(n) : "invalid input"
    }`
  );
  readline.close();
});

function recursiveFibonacci(n) {
  if (n <= 1) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
