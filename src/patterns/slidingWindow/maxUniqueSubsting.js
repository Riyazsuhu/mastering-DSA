function findLongestSubstring(str){
    // declare start, maxLen, indexMapper
    let start = 0,
        maxLen = 0,
        indexMapper = {};
    // loop through string and the index was end
    for(let end = 0; end < str.length; end++){
        const char = str[end];
        // the character index is greater than or equal to start index update char index + 1
        if(indexMapper[char] >= start) start = indexMapper[char] + 1;
        // updated char at indexMapper
        indexMapper[char] = end;
        // find the max value based new substing
        maxLen = Math.max(maxLen, end - start + 1)
    }
    // return maxLen
    return maxLen
}