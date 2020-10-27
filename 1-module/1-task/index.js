/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;
  while (n) {
    result *= n--;
  }
  return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));
