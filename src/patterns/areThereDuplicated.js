// multiple pointers
function areThereDuplicates() {
    const set = new Set();
    for (let arg of arguments) {
        if (set.has(arg)) {
            return true; // Duplicates found
        }
        set.add(arg);
    }
    return false; // No duplicates found
}
//  frequency counter algo 
//write a function call areThereDuplicates which accept n number of variables as arguments and return true or false based on duplicated in it the input contains both number and string
// examples areThereDuplicates(1, "e", "s", 3) false, areThereDuplicates() false, areThereDuplicates(1, 2, , 4, 2) 
function areThereDuplicates1() {
    // check the arguments length is less then 2 return false
    if (arguments.length < 2) return false;
    // declare counter object
    const counter = new Set();
    // loop through arguments fill the counter if it is duplicated return true
    for (let arg of Array.from(arguments)) {
        if (counter.has(arg)) return true;
        counter.add(arg)
    }
    return false
}
// areThereDuplicates One Liner Solution
function areThereDuplicates2() {
    return new Set(arguments).size !== arguments.length;
}
// Example usage:
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates1(1, 2, 2)); // true
console.log(areThereDuplicates2('a', 'b', 'c', 'a')); // true
