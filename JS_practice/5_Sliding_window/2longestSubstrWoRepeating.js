/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let start = 0;  // The starting index of the window
    let charMap = new Map();  // To store the most recent index of each character

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // If the character is already in the window, move the start pointer
        if (charMap.has(char)) {
            // Move the start pointer to the right of the last occurrence of the current character
            start = Math.max(start, charMap.get(char) + 1);
        }

        // Update the character's latest index
        charMap.set(char, end);

        // Calculate the length of the current window and update the max length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}