export const curry = binaryFn => {
  return firstArg => secondArg => binaryFn(firstArg, secondArg);
};