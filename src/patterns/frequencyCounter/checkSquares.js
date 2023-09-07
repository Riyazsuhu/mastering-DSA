//frequency counter pattern

// write function which accepts two array of numbers and check second array contains all the squre of first array in random order
// O(n) notation solution
function checkSquares(arr1, arr2){
    // if the two arrays length is not same return false
    if(arr1?.length !== arr2.length) return false;
    // declare two counter objects
    let counter1 = {};
    let counter2 = {}; 
    // loop through array and add counter for each element
    for(let i = 0; i < arr1.length; i++){
        let val1 = arr1[i]
        let val2 = arr2[i]
        counter1[val1] = (counter1[val1] || 0) + 1
        counter2[val2] = (counter2[val2] || 0) + 1
    }
    console.log({counter1, counter2})
    // loop throgh counter1 
    for(let key in counter1){
        // check it all squares are presenred in counter1 if not return false
        if(!(key ** 2 in counter2) || counter1[key] !== counter2[key ** 2]) return false
    }
    // else return true
    return true
}

console.log("[1,2,3,4], [4, 1, 16, 9]", checkSquares([1,2,3,4], [4, 1, 16, 9]))
console.log("[1,2,3,4], [4, 1, 16]", checkSquares([1,2,3,4], [4, 1, 16]))
console.log("[1,2,3,4], [4, 1, 12, 9]",checkSquares([1,2,3,4], [4, 1, 12, 9]))
console.log("[1,2,2,4], [4, 1, 16, 9]",checkSquares([1,2,2,4], [4, 1, 16, 9]))