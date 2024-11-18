/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {}; // Create an empty hash map (object in JS)
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; // Find the complement
        
        // Check if complement is already in the hash map
        if (hashMap.hasOwnProperty(complement)) {
            // If found, return the indices
            return [hashMap[complement], i];
        }
        
        // Otherwise, add the current number's index to the hash map
        hashMap[nums[i]] = i;
    }
    
    // In case no solution is found, though in the Two Sum problem, it's guaranteed to have a solution.
    return [];
};