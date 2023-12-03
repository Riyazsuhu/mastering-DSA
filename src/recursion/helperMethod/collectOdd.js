// collect odd number

const collectOddNum = (arr => {
    let result = []
    const helper = (arr => {
        if(arr.length === 0) return
        if(arr[0] % 2 !== 0){
            result.push(arr[0])
        }
        helper(arr.slice(1))
    })
    helper(arr)
    return result
})
function collectOddValues1(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues1(arr.slice(1)));
    return newArr;
}
console.log("collectOddNum", collectOddNum([1,2,3,4,5,6,7,8,9]))
console.log("collectOddNum1", collectOddNum1([1,2,3,4,5,6,7,8,9]))