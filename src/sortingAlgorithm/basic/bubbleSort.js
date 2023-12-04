// bubble sort is working like find maximum and out it in out (bubled it)
// write a bubble sort function to return sorted acceding array of number
import { swap } from "../../utils";

function bubbleSort(arr){
    // no swap for if the array is sorted there's no swap and we don't need to iterate
    let noSwap;
    // loop throgh arr length from the length
    for(let i = arr.length; i > 0; i-- ){
        // setup no swap value as true
        noSwap = true
        // inner loop for sorting is i - 1 so we don't endup comparing with undefined
        // this loop run stop before one step of i
        for(let j = 0; j < i - 1; j++){
            // if first element and second lesser will swap and update No swap
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
                noSwap = false
            } 
        }
        // if no swap isn't updated it'll break the loop to reduce unneccesary iteration
        if(noSwap) break
    }
    return arr
}

console.log(bubbleSort([34, 23, 32, 22]))

