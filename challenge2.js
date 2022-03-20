/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`);
}
greet("Ali");
/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  if (n % 2 === 0) {
    return false;
  } else {
    return true;
  }
}
isOdd(7);
console.log(`is Odd for the num 7 = ${isOdd(7)}`);
isOdd(10);
console.log(`is Odd for the num 10 = ${isOdd(10)}`);
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  return Math.trunc(n / 2);
}
console.log(`Odds smaller than 7 is ${oddsSmallerThan(7)}`);
console.log(`Odds smaller than 15 is ${oddsSmallerThan(15)}`);
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if (n % 2 === 0) {
    return n * 2;
  } else {
    return n * n;
  }
}
console.log(`squareOrDouble(16) is ${squareOrDouble(16)}`);
console.log(`squareOrDouble(9) is ${squareOrDouble(9)}`);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };