// write a function to find index of value which is passed as argument, the function acceptes two input value and array
function customIndexOf(value, arr){
    if(arr.length === 0) return -1
    if(arr.length === 1 && value === arr[0]) return 0
    // loop through array until end if match break 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value) return i 
    }
    return -1;
}

console.log(customIndexOf(7, [1, 3, 5, 6, 3, "test"]))