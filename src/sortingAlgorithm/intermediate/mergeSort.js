import { merge } from "../../utils.js"

function mergeSort(arr){
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)), 
        right = mergeSort(arr.slice(mid));
    return merge(left, right)
}
console.log(mergeSort([12, 3, 4, 11]))
// [12, 3, 4, 11]
// [12, 3] [4, 11]
// [12] [3] [4] [11]
// [3, 12] [4, 11]
// [3, 4, 11, 12]