// write a function to return str pattern match count 
// inputs will two string one was actual string and another one was query str
// output is number of times pattern matches

function findPattern(str, ptrn){
    let count = 0
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < ptrn.length; j++){
            if(str[i + j] !== ptrn[j]) break;
            if(ptrn.length - 1 === j) count++;
        }
    }
    return count
}

console.log(findPattern("asaomgasomg", "omg"))