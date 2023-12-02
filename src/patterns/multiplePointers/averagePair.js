// Multiple poiters algo
// write a function to  find a pair average of from sorted array and it's equals to target average argument . return Boolean based on that
// examples averagePair([1,2,3,6], 2.5) true, averagePair([2,3,5,7], 6) false, averagePair([], 2) false, averagePair([2], 2) true
function averagePair(arr, trgAvg){
    // if array length is zero return false else if array contains one check if it is matched with trg avg
    if(arr.length < 1) return false;
    else if(arr.length === 1) return arr[0] === trgAvg;
    let left = 0,
        right = arr.length - 1,
        avg = -Infinity;
    // loop untill left is less then right
    while(left < right){
        avg = (arr[left] + arr[right]) / 2;
        // if average is equals to trgAvg return true
        if(avg === trgAvg) return true;
        // else if average is greater move right pointer
        else if(avg > trgAvg) right--;
        // else move left
        else left++;
    }
    // return false nothing happend
    return false;
}