/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {void}
 */

function sumSalary(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    if (typeof salary === "number") {
      sum += salary;
    }
  } return sum;
}
