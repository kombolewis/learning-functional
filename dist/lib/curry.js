// export const curry =  (fn) => {
//     if(typeof fn !== 'function') {
//         throw  Error('No function provided');
//     }
//     const curriedFn = (...args) => {
//         if(args.length < fn.length) {
//             return () => {
//                 curriedFn(args.concat([].slice.call(arguments)))
//             }
//         }
//         return fn(...args);  
//     }
//     return curriedFn;
// }

export const curry = fn => {
  if (typeof fn !== 'function') {
    throw new Error('No function provided');
  }
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
  return curried;
};
export const partial = (fn, ...partialArgs) => {
  let args = partialArgs;
  return (...fullArguments) => {
    let arg = 0;
    for (let i = 0; i < args.length && arg < fullArguments.length; i++) {
      if (args[i] == undefined) {
        args[i] = fullArguments[arg++];
      }
    }
    return fn(...args);
  };
};