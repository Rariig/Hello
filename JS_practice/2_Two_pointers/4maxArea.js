/**
 * @param {number[]} height
 * @return {number}
 */



var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0

    while (left < right){
        let tempHeightToUse
        if(height[left] > height[right]){
            tempHeightToUse = height[right]
        }
        else if(height[right] > height[left]){
            tempHeightToUse = height[left]
        }
        else if(height[right] == height[left]){
            tempHeightToUse = height[left]
        }

        if (tempHeightToUse * (right-left) > maxArea) {
            maxArea = tempHeightToUse * (right-left)
             
        } 
        else if (height[right] > height[left]) {
            left++; // Move left pointer to the right to try to increase area
        } 
        else {
            right--; // Move right pointer to the left to try to increase area (until they meet)
        }  
    }
    return maxArea 
};


let test = [1,1]
console.log(maxArea(test));