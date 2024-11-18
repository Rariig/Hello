/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let countMap = {}; 

    for (let elem of nums) {
        // If the element is already in the object, increment its count
        if (countMap[elem]) {
            countMap[elem]++;
        } else {
            countMap[elem] = 1; //init
        }
    }

    let countArray = Object.entries(countMap);// Step 2: Convert the hashmap into an array of [element, count] pairs
    countArray.sort((a, b) => b[1] - a[1]);// Step 3: Sort the array by count in descending order
    return countArray.slice(0, 2).map(item => item[0]);// Step 4: Return the first two elements with the highest counts
    //return countArray.slice(0, 2).map(item => parseInt(item[0]));
};