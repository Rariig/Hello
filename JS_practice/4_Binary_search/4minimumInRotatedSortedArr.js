/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // The minimum is in the right half
            left = mid + 1;
        } else {
            // The minimum is in the left half (including mid)
            right = mid;
        }
    }

    // At the end of the loop, left == right, pointing to the smallest number
    return nums[left];
}
