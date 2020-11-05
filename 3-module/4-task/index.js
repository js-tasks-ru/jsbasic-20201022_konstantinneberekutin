/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  const filteredUsers = users.filter(item => item.age <= age);
  return filteredUsers.map(item => `${item.name}, ${item.balance}`).join('\n');
}
