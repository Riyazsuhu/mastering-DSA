// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// examples
// input: [1,2], 3 output => null
//input: [1,3,4,5,6], 3 output: 15

const maxSubarraySum = (arr, n) => {
    // if length of array is less than sum n return null
    if (arr?.length < n) return null
    // declare max and temp variable
    let temp = 0,
        max = 0;
    // loop array untill n and assign the value to max and temp
    for (let i = 0; i < n; i++) {
        temp += arr[i]
    }
    max = temp
    // loop the whole array but start from the n index
    for (let i = n; i < arr.length; i++) {
        // temp - initial value of first subset + initial value of next subset 
        temp = temp - arr[i - n] + arr[n]
        max = Math.max(temp, max)
    }
    return max
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
maxSubarraySum([4, 2, 1, 6], 1) // 6
maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
maxSubarraySum([], 4) // null