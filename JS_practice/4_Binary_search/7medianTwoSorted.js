/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array for optimized binary search
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let x = nums1.length;
    let y = nums2.length;

    let low = 0, high = x;

    while (low <= high) {
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        // Edge cases to handle partitions at array boundaries
        let maxX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        let minX = (partitionX === x) ? Infinity : nums1[partitionX];
        let maxY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        let minY = (partitionY === y) ? Infinity : nums2[partitionY];

        // Check if we have a valid partition
        if (maxX <= minY && maxY <= minX) {
            // Found the correct partition
            if ((x + y) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            // Move left in nums1
            high = partitionX - 1;
        } else {
            // Move right in nums1
            low = partitionX + 1;
        }
    }
    
    throw new Error("Input arrays are not sorted");
};
