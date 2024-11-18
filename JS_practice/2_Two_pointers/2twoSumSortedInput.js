/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSumFromSorted(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) {
            //return [arr[left], arr[right]]; // Found the pair
            return [left,right]
        } else if (sum < target) {
            left++; // Move left pointer to the right to increase sum
        } else {
            right--; // Move right pointer to the left to decrease sum
        }
    }

    return null; // No pair found
}