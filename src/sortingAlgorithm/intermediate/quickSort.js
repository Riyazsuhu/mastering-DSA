import { swap } from "../../utils.js"
// It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
const pivot = (arr, start, end) => {
    // Grab the pivot from the start of the array 
    // Store the current pivot index in a variable (this will keep track of where the pivot should end up)
    let swpInd = start,
        pivot = arr[start]
    // Loop through the array from the start until the end
    for (let i = start + 1; i <= end; i++) {
        // If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
        if (pivot > arr[i]) {
            swpInd++;
            swap(arr, swpInd, i)
        }
    }
    // Swap the starting element (i.e. the pivot) with the pivot index
    swap(arr, start, swpInd)
    // Return the pivot index
    return swpInd
}

// [23, 32, 12, 34, 54]
// [23, 12, 32, 34, 54]

// [23, 32, 12, 34, 54, 22, 12]
// [12, 12, 22, 32, 54, 32, 34]

const quickSort = (arr, left, right) => {
    // Your base case occurs when you consider a subarray with less than 2 elements
    if(left < right){
        // Call the pivot helper on the array
        const pivotInd = pivot(arr, left, right)
        // When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
        quickSort(arr, left, pivotInd - 1)
        quickSort(arr, pivotInd + 1, right)
    }
    return arr
}

// [23, 32, 12, 34, 54]
// [12, 23, 32, 34, 54] 1
// [12, 23, 32, 34, 54]
// [12, 23, 32, 34, 54]
// [12, 23, 32, 34, 54] 2
// [12, 23, 32, 34, 54] 3

console.log(quickSort([23, 32, 12, 34, 54], 0, 4))
console.log(quickSort([23, 32, 12, 34, 54, 22, 12], 0, 6))

// [23, 32, 12, 34, 54, 22, 12]
// [23, 12, 32, 34, 54, 22, 12] 1
// [23, 12, 22, 34, 54, 32, 12] 2
// [23, 12, 22, 12, 54, 32, 32] 3
// [12, 12, 22, 23, 54, 32, 32] 3
// [12, 12, 22, 23, 54, 32, 32] 

