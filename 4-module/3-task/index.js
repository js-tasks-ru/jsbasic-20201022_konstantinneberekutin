/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  const rows = table.getElementsByTagName('tr');

  let positionGender;
  let positionAge;
  let positionStatus;
  let classTable = {
    m: 'male',
    f: 'female',
    true: 'available',
    false: 'unavailable'
  };

  for (let i = 0; i < rows[0].children.length; i++) {
    if (rows[0].children[i].innerHTML === 'Age') {
      positionAge = i;
    }
    if (rows[0].children[i].innerHTML === 'Gender') {
      positionGender = i;
    }
    if (rows[0].children[i].innerHTML === 'Status') {
      positionStatus = i;
    }
  }

  for (let rowTable = 1; rowTable < rows.length; rowTable++) {
    let classGender = rows[rowTable].children[positionGender];

    classGender.parentNode.classList.add(classTable[classGender.innerHTML]);

    let classAge = rows[rowTable].children[positionAge].innerHTML;

    if (classAge < 18) {
      classGender.parentNode.setAttribute('style', 'text-decoration: line-through');
    }

    let classStatus = rows[rowTable].children[positionStatus];

    if (classStatus.hasAttribute('data-available')) {
      let element = classStatus.getAttribute('data-available');

      classStatus.parentNode.classList.add(classTable[element]);
    } else {
      classStatus.parentNode.hidden = true;
    }
  }
}
