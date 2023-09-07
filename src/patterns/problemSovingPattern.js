// * Understand the Problem
// * Explore Concrete Examples
// * Break It Down
// * Solve/Simplify
// * Look Back and Refactor

// Understand the problem

// Right a function to accept string and return count of each character in that string
// the argument need only accepts string if anything else will return {}
// there is no case sensitive and we only count alphanumerics
// the output is object

// Explore Concrete examples

// input: "Hello" output: {h: 1, e: 1, l:2, o: 1}

// input: "" output: {}

// input: null output: {}

// Break It Down

const countString = str => {
    // declare a object we're going to return
    let obj = {}
    // check the argument is empty string or other data type, if it is return our object
    if(typeof str !== "string" || str?.length === 0) return {}
    // lowercase entire string
    str = str.toLowerCase()
    // loop string charcters
    for(let char of str){
        // check the character is other then alphanumeric skip the loop
        if(/[a-z0-9]/.test(char)){
            // If character is presented in our object as key increment count + 1
            // else add key to the obeject with a count 1
            obj[char] = ++obj[char] || 1
        }
    }
    // return the output 
    return obj
}

console.log(countString("Hello my riyaz@1999!!.."))