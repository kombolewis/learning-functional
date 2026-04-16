import { reduce } from "./array-utils.js"
// export const compose = (a,b) => c => a(b(c))

export const compose = (...fns) => value => reduce(fns.reverse(), (acc, fn) => fn(acc), value)