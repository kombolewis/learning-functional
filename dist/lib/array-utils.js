const map = (fn, array) => {
  let results = [];
  for (const value of array) {
    results.push(fn(value));
  }
  return results;
};
const filter = (fn, array) => {
  let results = [];
  for (const value of array) {
    fn(value) ? results.push(value) : undefined;
  }
  return results;
};
const concatAll = (array, fn) => {
  let results = [];
  for (const value of array) {
    results.push(...value);
  }
  return results;
};
export const reduce = (array, fb, initialValue) => {
  let accumulator;
  if (initialValue != undefined) {
    accumulator = initialValue;
  } else {
    accumulator = array[0];
  }
  if (initialValue === undefined) {
    for (let i = 1; i < array.length; i++) {
      accumulator = fb(accumulator, array[i]);
    }
  } else {
    for (const value of array) {
      accumulator = fb(accumulator, value);
    }
  }
  return accumulator;
};
const zip = (left, right, fn) => {
  let index,
    results = [];
  for (index = 0; index < Math.min(left.length, right.length); index++) {
    results.push(fn(left[index], right[index]));
  }
  return results;
};
export default {
  concatAll,
  filter,
  map,
  reduce,
  zip
};