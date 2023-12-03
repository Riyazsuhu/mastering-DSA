// first recursion func
const printNums = (num => {
    if(num <= 0){
        console.log("All Done")
        return 
    }
    console.log(num)
    num--
    printNums(num)
})

printNums(5)

const sumRange = (num => {
    if(num === 1) return num
    return num + sumRange(num - 1)
})

console.log("sumRange", sumRange(4))

const factorial = (num => {
    if(num === 1) return num
    return num * factorial(num - 1)
})

console.log("factorial", factorial(3))

// POWER SOLUTION
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
// FACTORIAL SOLUTION
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
// RECURSIVE RANGE SOLUTION
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}
// FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

function isPalindrome1(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

function reverse(str){
    let revStr = ""
    // add whatever parameters you deem necessary - good luck!
    if(str.length === 0) return ""
    revStr += str[str.length - 1] 
    return revStr.concat(reverse(str.slice(0, -1)))
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function isPalindrome(str){
    function helper(str){
        let revStr = "";
        if(str.length === 0) return ""
        revStr += str[str.length - 1]
        return revStr.concat(helper(str.slice(0, -1)))
    }
    return str === helper(str)
}

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback){
    if(arr.length === 0) return false
    return callback(arr[0]) || someRecursive(arr.slice(1), callback)
}

function flatten(arr){
    let flatArr = []
    function helper(arr){
        if(arr.length === 0) return []
        if(Array.isArray(arr[0])) helper(arr[0])
        else flatArr.push(arr[0])
        return helper(arr.slice(1))
    }
    helper(arr)
    return flatArr
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])

function collectStrings(obj){
    let strArr = []
    for(let key in obj){
        if(typeof obj[key] === "string") strArr.push(obj[key])
        else if(typeof obj[key] === "object") strArr = strArr.concat(collectStrings(obj[key]))
    }
    return strArr;
}

function capitalizeFirst (arr) {
    let capArr = []
  if(arr.length === 0) return []
  capArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1))
  return capArr.concat(capitalizeFirst(arr.slice(1)))
}

function nestedEvenSum (obj) {
    let sum = 0
    for(let key in obj){
        if(typeof obj[key] === "number" && obj[key]%2 === 0) sum += obj[key]
        else if(typeof obj[key] === "object") sum += nestedEvenSum(obj[key])
    }
    return sum;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

function capitalizeWords (arr) {
    let capArr = []
    if(arr.length === 0) return []
    capArr.push(arr[0].toUpperCase())
    return capArr.concat(capitalizeWords(arr.slice(1)))
  }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']


let obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

// stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
function stringifyNumbers(obj){
    let stringifyObj = {}
    for(let key in obj){
        if(typeof obj[key] === "number") stringifyObj[key] = String(obj[key])
        else if(Array.isArray(obj[key]) || typeof obj[key] !== "object") stringifyObj[key] = obj[key]
        else stringifyObj[key] = stringifyNumbers(obj[key])
    }
    return stringifyObj
}
const obj1 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj1)) // ["foo", "bar", "baz"])

function collectStrings(obj){
    let strArr = []
    for(let key in obj){
        if(typeof obj[key] === "string") strArr.push(obj[key])
        else if(typeof obj[key] === "object") strArr = strArr.concat(collectStrings(obj[key]))
    }
    return strArr;
}
