export const forEach = (array, fn) => {
  for (const value of array) fn(value);
};
export const forEachObject = (obj, fn) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn(key, obj[key]);
    }
  }
};
export const unless = (predicate, fn) => {
  if (!predicate) fn();
};
export const times = (times, fn) => {
  for (let i = 0; i < times; i++) fn(i);
};
export const every = (arr, fn) => {
  let result = true;
  for (let value of arr) {
    result = result && fn(value);
  }
  return result;
};
export const some = (arr, fn) => {
  let result = false;
  for (let value of arr) {
    result = result || fn(value);
  }
  return result;
};
export const tap = value => fn => (typeof fn === 'function' && fn(value), console.log(value));
export const unary = fn => fn.length === 1 ? fn : arg => fn(arg);
export const once = fn => {
  let done = false;
  return (...args) => {
    return done ? undefined : (done = true, fn(...args));
  };
};
export const factorial = n => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
export const memoized = fn => {
  const lookupTable = {};
  return arg => lookupTable[arg] || (lookupTable[arg] = fn(arg));
};
export const fastFactorial = memoized(n => {
  if (n === 0) return 1;
  return n * fastFactorial(n - 1);
});
export const objectAssign = (target, source) => {
  const to = {};
  for (var i = 0; i < arguments.length; i++) {
    const from = arguments[i];
    const keys = Object.keys(from);
    for (let j = 0; j < keys.length; j++) {
      to[keys[j]] = from[keys[j]];
    }
  }
  return to;
};