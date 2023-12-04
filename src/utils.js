export const calculateExcutionTime = (t1, t2) => console.log(`Time Elapssed: ${(t2 - t1) / 1000} seconds.`)

export const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
}

export const merge = (arr, arr1) => {
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