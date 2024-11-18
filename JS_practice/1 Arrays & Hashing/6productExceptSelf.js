
//WO DIVISION
function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Calculate the left products and store them in result
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Calculate the right products and update the result
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}


//WITH DIVISION 
  /*  function productExceptSelf(nums) {
        
        let totalProduct = 1;
        for (let num of nums) {
            totalProduct *= num;// First pass: Calculate the total product
        }
    
        // populate array
        const result = new Array(nums.length);
        for (let i = 0; i <nums.length; i++) {
            result[i] = totalProduct / nums[i]; // Avoid using a hash map, just divide, makes a lot of sense atually
        }
    
        return result;
    }
    */