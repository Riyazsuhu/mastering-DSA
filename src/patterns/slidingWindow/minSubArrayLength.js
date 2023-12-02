// write a function for find the minimum length of contigious subarray based on integer number argument. the sub array sum is minimum or greater then the input number, if less return 0
// examples: minSubArrayLen([1,2,1,4,5,3], 8), [5, 3] 2, minSubArrayLen([1,2,3, 4, 5, 7], 4) [4] 1, minSubArrayLen([1,2,3,4,5], 10) [], 0
const minSubArrayLen = (arr, target) => {
    // check the array length < 0 return false
    if(arr.length < 1) return 0;
    // declare tempLen and minLen
    let minLen = Infinity, 
        start = 0,
        end = 0,
        sum = 0;
    // loop untill start reach end length
    // expand the window sum is lesser
    // contstain the window if greater or equal
    // if equals move the window one step
    while(start < arr.length){
        if(sum < target && end < arr.length){
            sum += arr[end];
            end++;
        }else if(sum >= target){
            minLen = Math.min(minLen, end - start);
            sum -= arr[start];
            start++;
        }else break;
    }
    return minLen === Infinity ? 0 : minLen;
};

minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52); 