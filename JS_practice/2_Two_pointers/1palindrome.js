/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(str) {
    
    let cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();  // Remove non-alphabetic characters and convert to lowercase
    let reversedStr = cleanedStr.split('').reverse().join(''); // Check if cleanedStr is the same when reversed
    
    return cleanedStr === reversedStr;
}