// write a zero sum function it takes input of sorted array of numbers and return pair in array, which sum is 0

// O(n) time complexity

const sumZero = arr => {
    console.log("input array:" ,arr)
    // declare two pointer for start and end of the array
    let ptr1 = 0,
        ptr2 = arr.length - 1;
    // write conditional looping until the two pointer1 < pointer2
    while(ptr1 < ptr2){
        let sum = arr[ptr1] + arr[ptr2] 
        // if sum of two pointer array is 0 return those pointer value in array ie, [-3, 3]
        if(sum === 0) return [arr[ptr1], arr[ptr2]]
        // else sum is greatethan zero decrease pointer2
        else if(sum > 0) --ptr2;
        // else increase pointer1
        else ++ptr1;
    }
        
}
    
console.log(sumZero([-1, 1, 2, 3, 4]))
console.log(sumZero([-2 ,-1, 1, 2, 3, 4]))
console.log(sumZero([-3 ,-1, 1, 2, 4]))