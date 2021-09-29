const _ = {
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }

    let isInRange = start <= number && number < end;

    return isInRange;
  },
  words(string) {
    return string.split(' ');
  },
  pad(string, length) {
    if (length <= string.length) return string;
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = length - string.length - startPaddingLength;
    let paddedString =
      ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);

    return paddedString;
  },
  has(object, key) {
    if (object[key] === undefined) return false;
    return true;
  },
  invert(object) {
    const invertedObject = {};
    for (const key in object) {
      const originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for (const key in object) {
      if (predicate(object[key])) return key;
    }
    return undefined;
  },
  drop(array, n = 1) {
    return array.slice(n);
  },
  dropWhile(array, predicate) {
    return this.drop(
      array,
      array.findIndex((element, index) => !predicate(element, index, array))
    );
  },
};

// Do not write or modify code below this line.
module.exports = _;
