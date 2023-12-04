// selection sort is opposite to bubble sort, find the min and out in first
import { swap } from "../../utils.js";
function selectionSort(arr){
    // declare min valiable whatever in 
    let minInd;
    // compare the min item with next item until you find the samllest item
    // loop throgh array number items - 1
    for(let i = 0; i < arr.length - 1; i++){
        // set first position of array as min
        minInd = i
        // run inner loop with from i + 1 and compare minimum
        for(let j = i + 1; j < arr.length; j++){
            // check the value is min
            if(arr[j] < arr[minInd]) minInd = j 
            console.log({minInd, i, j, arr})
        }
        // compare the minimum and swap
        if(minInd !== i) swap(arr, i, minInd)
    }
    // return sorted arr
    return arr
}

console.log(selectionSort([23, 21, 45, 56, 22]))