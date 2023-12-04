// selection sort is something which is compare items i + 1 and insert it in sorted half

function insertionSort(arr){
    let min = 0
    for(let i = 1; i < arr.length; i++){
        const curVal = arr[i]
        for(var j = i - 1; j >= 0 && arr[j] > curVal; j--) arr[j+1] = arr[j]
        arr[j+1] = curVal
    }
    return arr
}

console.log(insertionSort([12,34, 23, 55, 21]))

// [12, 34, 23, 55, 21]
// [12, 34, 23, 55, 21]
// [12, 23, 34, 55, 21]
// [12, 23, 34, 21, 55]
// [12, 23, 21, 34, 55]
// [12, 21, 23, 34, 55]