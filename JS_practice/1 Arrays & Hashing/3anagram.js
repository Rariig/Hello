/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Step 0: Check if the lengths of the strings are different
    if (s.length !== t.length) {
        return false;
    }

    // Step 1: Create a hash map to store the character frequencies of `s`
    let charCount = {};

    // Step 2: Count the frequency of each character in `s`
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1; //!!!!!!!!
    }

    // Step 3: Decrease the count for each character in `t`
    for (let char of t) {
        if (!charCount[char]) {
            // If a character in `t` doesn't exist in `s` or its count is 0, they're not anagrams
            return false;
        }
        charCount[char]--;
    }

    // Step 4: If all counts are zero, the strings are anagrams
    return true;
};