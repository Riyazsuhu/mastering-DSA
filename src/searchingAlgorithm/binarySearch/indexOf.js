// write a function to element in array and return it's index, using the array and search value

function indexOf(arr, num){
    let left = 0,
        right = arr.length - 1,
        mid = Math.floor((left + right) / 2)
    while(left <= right){
        if(arr[mid] === num) return mid
        else if(arr[mid] < num) left = mid + 1
        else right = mid - 1 
        mid = Math.floor((left + right) / 2)
    }
    return -1
}

console.log(indexOf([1,2,3,4,5],2)) // 1
console.log(indexOf([1,2,3,4,5],3)) // 2
console.log(indexOf([1,2,3,4,5],5)) // 4
console.log(indexOf([1,2,3,4,5],6)) // -1
console.log(indexOf([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(indexOf([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(indexOf([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1