/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {
  let arrInputData = str.split(' ').join(',').split(',').map(string => parseFloat(string));
  let {min, max} = arrInputData.reduce(function(r, e, i) {
    if (i === 0) r.max = e, r.min = e;
    if (e > r.max) r.max = e;
    if (e < r.min) r.min = e;
    return r;
  } , {});
  return result = {
    min: min,
    max: max,
  };
}
