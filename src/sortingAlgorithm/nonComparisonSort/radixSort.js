import { mostDigits, findDigit } from "../../utils.js";

// Define a function that accepts list of numbers
function radixSort(arr){
    // Figure out how many digits the largest number has
    let totalDigit = mostDigits(arr);
    // Loop from k = 0 up to this largest number of digits
    for(let i = 0; i < totalDigit; i++){
        // For each iteration of the loop:
        // Create buckets for each digit (0 to 9)
        let bucket = Array.from({length: 10}, () => [])
        for(let j = 0; j < arr.length; j++){
            // place each number in the corresponding bucket based on its kth digit
            bucket[findDigit(arr[j], i)].push(arr[j])
        }
        // Replace our existing array with values in our buckets, starting with 0 and going up to 9
        arr = [].concat(...bucket)
    }
    // return list at the end!
    return arr
}

console.log(radixSort([23, 12, 415, 212, 425]))