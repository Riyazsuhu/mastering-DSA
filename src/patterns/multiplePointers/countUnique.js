// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
function countUniqueValues(arr){
    console.log("input: ",arr)
    // if the array length is lessthan 2 return length
    if(arr.length < 2) return arr.length
    // declare two pointer i and j which point 0 and 1 initialy
    let i = 0;
    // looping until j reach end of the array
    for(let j = 1; j < arr.length; j++){
         // if value of pointer i and j is different
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    console.log("processed: ", arr, i+1)
    return i+1
}

console.log("output: ", countUniqueValues([1,1,1,1,1,2])) // 2
console.log("output: ", countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log("output: ", countUniqueValues([])) // 0
console.log("output: ", countUniqueValues([-2,-1,-1,0,1])) // 4