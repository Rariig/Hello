/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
//my shitty solution
/*var dailyTemperatures = function(temperatures) {
    let stack = [...temperatures]
    let outputStack =[]
    stack.reverse();
    while (stack.length !=0) {
        if (stack.length ==1) {
            outputStack.push(0)
            stack.pop()
        }
        if (stack[stack.length-1]<stack[stack.length-2]) {
            stack.pop()
            outputStack.push(1)
        }
        else if (stack[stack.length-2]<stack[stack.length-1]) {
            temphighest = stack[stack.length-1]
            tempCount = 0
            
            for (let i = 0; i <= stack.length-2; i++) {
                test = stack[stack.length-2-i]
               if (temphighest > test && stack.length-2-i !=0) {
                    tempCount++
               }
               else if (temphighest < test){
                    outputStack.push(tempCount+1)
                    stack.pop()
                    break
               }
               else{
                outputStack.push(0)
                stack.pop()
               }
            }
        }
    }
    
    return outputStack

};*/

//BETTER SOLUTION
var dailyTemperatures = function(temperatures) {
    let outputStack = new Array(temperatures.length).fill(0); // Initialize output array with 0s
    let stack = []; // Stack to hold indices

    for (let i = 0; i < temperatures.length; i++) {
        // While the current temperature is greater than the temperature at the index stored at the top of the stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let index = stack.pop(); // Get the index of the colder temperature
            outputStack[index] = i - index; // Calculate the difference in days
        }
        stack.push(i); // Push the current index onto the stack
    }

    return outputStack; // Return the result array
};


test = [73,74,75,71,69,72,76,73]
console.log(dailyTemperatures(test))