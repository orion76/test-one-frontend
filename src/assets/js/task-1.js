
function isScalar(value) {
  return typeof value === 'string' || typeof value === 'number';
}

/*
 * функция obj_flip
 *   меняет местами ключ-значение публичных, скалярных свойств объекта или массива
 *
 * @param input - объект или массив
 * @return object
 *
 * */
function obj_flip(input) {
  return Object.keys(input)
    .filter(isScalar)
    .reduce(function (acc, key) {
      acc[input[key]] = key;
      return acc;
    }, {})
}
function isPositiveInteger(value) {
  return Number.isInteger(value) && value >-1;
}

function isIntegerArray(array) {
  return array.every(isPositiveInteger);
}

function invert(array, index, value) {
  console.log({index,value})
  if (index>=array.length) {
    array.fill(array.length, index, undefined);
  }
  array[index] = value;
  return array;
}

/*
 * метод Array.obj_flip
 *   меняет местами ключ-значение массива целых чисел
 *
 * @param input - массив целых чисел
 * @return array
 *
 * */
Array.prototype.flip = function () {
  if (!isIntegerArray(this)) {
    throw new Error('Array has not positive integer value. array:' + JSON.stringify(this));
  }
  return this.reduce(invert, [])
};
