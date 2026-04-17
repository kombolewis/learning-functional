import {forEach, forEachObject, times, unless, every, some, tap, unary,once, fastFactorial} from "./lib/es8-functional.js";
import ArrayUtils from "./lib/array-utils.js";
import {curry, partial} from "./lib/curry.js";
import { loggerHelper } from "./lib/logger.js";
import { compose } from "./lib/compose.js";
const {map, filter, concatAll,reduce,zip} = ArrayUtils;

// const array = [1,2,3]
// forEach(array, data => console.log(data));

// let object = {a:1, b:2}
// forEachObject(object,(k,v) => console.log("the key is: " + k + " and the value is: " + v));

// forEach([1,2,3,4,5,6,7],number => {
//     unless(number % 2, () => console.log(number + " is even"));
// })

// times(100, n => {
//     unless(n%2, () => console.log(n + " is even"))
// })

// every([NaN,NaN], isNaN)
// some([NaN, 1], isNaN);

// const people = [
//     { firstname: "aaFirstName", lastname: "cclastname" },
//     { firstname: "ccFirstName", lastname: "aalastname" },
//     { firstname: "bbFirstName", lastname: "bblastname" }
// ];

// people.sort((a,b) => {
//     return (a.firstname < b.firstname) ? -1 : (a.firstname > b.firstname) ? 1 : 0;
// })

// tap('fun')(it => console.log('value is ', it))

// forEach([1, 2, 3], number => {
//     tap(number)(() => console.log('value is ', number));
// })

// const arrStr = ['1', '2', '3']

// arrStr.map(unary(parseInt)) // [1, 2, 3] instead of [1, NaN, NaN] because parseInt takes two arguments and map passes three arguments to the callback function (value, index, array). By using unary, we ensure that parseInt only receives one argument (the value) and ignores the others.

// const doPayment = once(() => {
//     console.log(`Processing payment`);
// });

// doPayment(); // Processing payment of $100
// doPayment(); // (no output)

// console.log(fastFactorial(100)) // 120
// const res = map([1, 2, 3],(x) => x * x)
// console.log(res)

// let apressBooks = [ 
//     { 
//         name : "beginners", 
//         bookDetails : [ 
//             { 
//             "id": 111, 
//             "title": "C# 6.0", 
//             "author": "ANDREW TROELSEN", 
//             "rating": [5], 
//             "reviews": [{good : 4 , 
//             excellent : 12}] 
//             }, 
//             { 
//             "id": 222, 
//             "title": "Efficient Learning Machines", 
//             "author": "Rahul Khanna", 
//             "rating": [4.5], 
//             "reviews": [] 
//             } 
//         ] 
//     }, 
//     { 
//         name : "pro", 
//         bookDetails : [ 
//         { 
//         "id": 333, 
//         "title": "Pro AngularJS", 
//         "author": "Adam Freeman", 
//         "rating": [4.0], 
//         "reviews": [] 
//         }, 
//         { 
//         "id": 444, 
//         "title": "Pro ASP.NET", 
//         "author": "Adam Freeman", 
//         "rating": [4.2], 
//         "reviews": [{good : 14 , 
//         excellent : 12}] 
//         } 
//         ] 
//     } 
// ]; 

// const res = concatAll(map(apressBooks, ({bookDetails}) => bookDetails))


// let goodRatingCriteria =  book => book.rating[0] > 4.5
// const res = filter(concatAll(map(apressBooks, ({bookDetails}) => bookDetails)), goodRatingCriteria)

// let useless = [2,5,6,1,10]

// const res = reduce(useless, (acc, value) => acc * value)
// console.log(res)

// const bookDetails = concatAll(map(apressBooks, ({bookDetails}) => bookDetails));

// const reviews  =  reduce(bookDetails, (acc, bookDetails) => {
//     let goodReviews = bookDetails.reviews[0] != undefined ? bookDetails.reviews[0].good : 0;
//     let excellentReviews = bookDetails.reviews[0] != undefined ? bookDetails.reviews[0].excellent : 0;
//     return {good: acc.good + goodReviews, excellent: acc.excellent + excellentReviews}
// },{good: 0, excellent: 0})

// console.log(reviews)

// const zip2 = (left, right, fn) => {
//     let index, results = []

//     for(index = 0; index < Math.min(left.length, right.length); index++) {
//         results.push(fn(left[index], right[index]))
//     }
//     return results
// }

// const add = (x,y,z) => x + y +z
// const autoCurryAdd = curry(add)
// console.log(autoCurryAdd(2)(3))

// // zip2([1,2,3],[4,5,6],(a,b) => a + b)

// // const tableOf2 = (y) => 2 * y
// // const tableOf3 = (y) => 3 * y
// // const tableOf4 = (y) => 4 * y

// const genericTable = (x, y) => x * y

// const tableOf2 = curry(genericTable)(2)
// const tableOf3 = curry(genericTable)(3)
// const tableOf4 = curry(genericTable)(4)

// const multiply = (x,y,z) => x * y * z

// // let res = curry(multiply)(1,2,3)
// // console.log(res)

// let curriedMul3 = curry(multiply)(3)
// let curriedMul2 = curriedMul3(2)
// let curriedMul1 = curriedMul2(1)

// console.log(curriedMul1)

// let errorLogger = curry(loggerHelper)("ERROR")("Error at stats.js")
// let debugLogger = curry(loggerHelper)("DEBUG")("Debug at stats.js")
// let warnLogger = curry(loggerHelper)("WARN")("Warn at stats.js")

// errorLogger("Error message ", 21)
// debugLogger("Debug message ", 233)
// warnLogger("Warn message ",34)

// let match = curry(function(expr, str){
//     return str.match(expr)
// })

// let hasNumber = match(/[0-9]+/)
// let filter2 = curry(function(f, ary) {
//     return ary.filter(f)  
// })

// let findNumbersInArray = filter2(hasNumber)

// findNumbersInArray(['js', 'number1'])


// let delayTenMs = partial(setTimeout, undefined, 10)

const res = [
  {
    "id": 111,
    "title": "C# 6.0",
    "author": "ANDREW TROELSEN",
    "rating": [
      5
    ],
    "reviews": [
      {
        "good": 4,
        "excellent": 12
      }
    ]
  },
  {
    "id": 222,
    "title": "Efficient Learning Machines",
    "author": "Rahul Khanna",
    "rating": [
      4.5
    ],
    "reviews": []
  },
  {
    "id": 333,
    "title": "Pro AngularJS",
    "author": "Adam Freeman",
    "rating": [
      4
    ],
    "reviews": []
  },
  {
    "id": 444,
    "title": "Pro ASP.NET",
    "author": "Adam Freeman",
    "rating": [
      4.2
    ],
    "reviews": [
      {
        "good": 14,
        "excellent": 12
      }
    ]
  }
]
// const compose = (a,b) => c => a(b(c))
// const partial = (fn, ...partialArgs) => {
//     return (...fullArguments) => {
//         let args = [...partialArgs]
//         let arg = 0
//         for(let i =0; i < args.length && arg < fullArguments.length; i++) {
//             if(args[i] == undefined) {
//                 args[i] = fullArguments[arg++]
//             }
//         }
//         return fn(...args)
//     }
// }
// const map = (array, fn) => {
//     let results = []
//     for(const value of array){
//         results.push(fn(value))
//     }
//     return results
// }

// const filter = (array, fn) => {
//     let results = []
//     for(const value of array) {
//         (fn(value)) ? results.push(value) : undefined
//     }
//     return results
// }

// const curry = (fn) => {
//     if (typeof fn !== 'function') {
//         throw new Error('No function provided');
//     }
//     const curried = (...args) => {
//         if (args.length >= fn.length) {
//             return fn(...args);
//         }
//         return (...nextArgs) => curried(...args, ...nextArgs);
//     };

//     return curried;
// };

// let filterOutStandingBooks = (book) => book.rating[0] === 5;
// let filterGoodBooks = (book) => book.rating[0] > 4.5
// let filterBadBooks = (book) => book.rating[0] < 3.5

// let projectTitleAndAuthor = (book) => ({title:book.title,author:book.author})
// let projectAuthor = (book) => ({author:book.author})
// let projectTitle = (book) => ({title: book.title})


// let queryGoodBooks = partial(filter,filterGoodBooks, undefined)
// // let curriedQueryGoodBooks = curry(filter)(filterGoodBooks)
// let mapTitleAndAuthor = partial(map,projectTitleAndAuthor,undefined)
// // let curryMapTitleAndAuthor = curry(map)(projectTitleAndAuthor)
// let titleAndAuthorForGoodBooks = compose(mapTitleAndAuthor,queryGoodBooks)
// console.log(titleAndAuthorForGoodBooks(res))

// let splitIntoSpaces = str => str.split(" ")
// let count = array => array.length
// let oddOrEven = ip => ip % 2 == 0 ? "even" : "odd"

// const countWords = compose(oddOrEven, count, splitIntoSpaces)
// console.log(countWords("hello you're reading about composition"))

let add = (x,y) => x + y
let double = (x) => x + x

const val = add(10, double(7))

const val2 = 7 |> double |> (x => add(10, x))