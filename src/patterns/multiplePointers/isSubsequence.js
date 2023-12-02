// write a function to check wheather the first string is presented in second string without changing the order
// example isSubsequence("hell", "hello") true, isSubsequence("diping", "dripping") true, isSubsequence("coal", "cola") false and isSubsequence("abc", "acb") false 
function isSubsequence(str1, str2) {
    if(str1.length > str2.length) return false; 
    // declare pointer
    let i = 0;
    // loop through str2
    for(let char of str2){
        // if str1 of i equals char, increase i+1
        if(str1[i] === char) i++;
        if(i === str1.length - 1) return true;
    }
    return false;
}
// recursive
function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }