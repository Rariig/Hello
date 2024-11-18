/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of nums) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Count consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}