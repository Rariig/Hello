/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashMap = {};

    for (let index = 0; index < nums.length; index++) {
        if (hashMap.hasOwnProperty(nums[index])) {
            return true;
        }
        hashMap[nums[index]] = index;
    }
    return false;
};