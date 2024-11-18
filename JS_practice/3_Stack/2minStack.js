var MinStack = function() {
    this.stack = [];  // To store the stack elements
    this.minStack = [];  // To store the minimum values as not to go over O(1) complexity
};

// Push method
MinStack.prototype.push = function(val) {
    this.stack.push(val);  // Push the value onto the main stack
    // Push the new minimum onto the minStack
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

// Pop method
MinStack.prototype.pop = function() {
    const poppedValue = this.stack.pop();  // Remove the top value from the main stack
    // If the popped value is the same as the current minimum, pop it from the minStack as well
    if (poppedValue === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

// Top method
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];  // Return the top value without removing it
};

// GetMin method
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];  // Return the current minimum value
};