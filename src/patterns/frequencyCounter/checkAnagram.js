function validAnagram(str1, str2){
    //   if two string length is not same return false
    if(str1.length !== str2.length) return false
    // if the two string are same return true
    if(str1 === str2) return true
    // declare two counters
    let counter1 = {},
        counter2 = {};
    // loop through any string length
    for(let i = 0; i < str1.length; i++){
        let char1 = str1[i],
            char2 = str2[i]
        // if the key is already presented in counter add 1 or just assign 1 in counter for both string
        counter1[char1] = (counter1[char1] || 0) + 1
        counter2[char2] = (counter2[char2] || 0) + 1
    }
    // loop through counter
    for (let key in counter1){
        // check the key of counter1 is not presented in counter2 return false
        // check the count of the two counte for perticular chracter not same return false
        if(!(key in counter2) || counter1[key] !== counter2[key]) return false
    }
    return true
}

function validAnagram1(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
1  