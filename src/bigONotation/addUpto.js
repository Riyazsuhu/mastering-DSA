import { calculateExcutionTime } from "../utils.js"
// First method for solving sum of series
function addUpto(n){
    let total = 0
    for(let i = 0; i <= n; i++)
        total += 1
}
let t1 = performance.now()
addUpto(100000000)
let t2 = performance.now()
calculateExcutionTime(t1, t2)

// simplified method
const addUpto1 = n => n * (n - 1) / 2

t1 = performance.now()
addUpto1(100000000)
t2 = performance.now()
calculateExcutionTime(t1, t2)

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
console.log(subtotals([1,2,3,4,5,6,7,8]))



