const merge = (arr, arr1) => {
    let mergedArr = [],
        i = 0,
        j = 0
    while(i < arr.length && j < arr1.length){
        if(arr[i] < arr1[j]){
            mergedArr.push(arr[i])
            i++;
        }else{
            mergedArr.push(arr1[j])
            j++;
        } 
    }
    while(i < arr.length){
        mergedArr.push(arr[i])
        i++
    }
    while(j < arr1.length){
        mergedArr.push(arr1[j])
        j++
    }
    return mergedArr
}

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