// write a function for same frequency of digits, the input will be two positive integer
// example sameFrequency(129, 921) true, sameFrequency(238, 223) false
function sameFrequency(num1, num2){
    // covert two input int to String
    num1 = String(num1);
    num2 = String(num2);
    // if length isn't same return false or return true both are same
    if(num1.length !== num2.length) return false;
    else if(num1 === num2) return true;
    // declare two frequency counters
    let counter1 = {},
        counter2 = {};
    // loop through any one array and collect the frequency of digits
    for(let i = 0; i < num1.length; i++){
        counter1[num1[i]] = ( counter1[num1[i]] || 0) + 1
        counter2[num2[i]] = ( counter2[num2[i]] || 0) + 1
    }
    // loop keys in counter1 and check it is presented in counter2
    for(let key in counter1){
    // if not presented or frequency is diffrent return false
        if(!(key in counter2) || counter1[key] !== counter2[key]  ) return false
    }
    // finally return true 
    return true
}
