/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
    let start = 0; // Left boundary of the window
    let maxLength = 0; // To store the length of the longest valid window
    let maxFreq = 0; // To store the frequency of the most common character in the window
    let freqMap = {}; // Map to store the frequency of characters in the current window

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // Update the frequency of the current character
        freqMap[char] = (freqMap[char] || 0) + 1;

        // Update the maxFreq (most frequent character count)
        maxFreq = Math.max(maxFreq, freqMap[char]);

        // If the current window size minus the most frequent character's count exceeds k, shrink the window
        if (end - start + 1 - maxFreq > k) {
            // Move the start pointer to the right to shrink the window
            freqMap[s[start]]--;
            start++;
        }

        // Calculate the window size and update maxLength
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
