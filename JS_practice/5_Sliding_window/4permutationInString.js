/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    let targetCount = Array(26).fill(0);
    let windowCount = Array(26).fill(0);
    let aCharCode = 'a'.charCodeAt(0);

    for (let i = 0; i < s1.length; i++) {
        targetCount[s1.charCodeAt(i) - aCharCode]++;
        windowCount[s2.charCodeAt(i) - aCharCode]++;
    }

    for (let i = s1.length; i < s2.length; i++) {
        if (targetCount.toString() === windowCount.toString()) return true;

        // Update window counts
        windowCount[s2.charCodeAt(i) - aCharCode]++;
        windowCount[s2.charCodeAt(i - s1.length) - aCharCode]--;
    }

    return targetCount.toString() === windowCount.toString();
}
