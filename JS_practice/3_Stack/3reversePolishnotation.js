/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
    const stack = [];

    for (const token of tokens) {
        if (!isNaN(token)) { //if is notanumber
            stack.push(Number(token));  // Push numbers onto the stack
        } else {
            const a = stack.pop();
            const b = stack.pop();
            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(Math.trunc(a / b));  // Ensure integer division
                    break;
            }
        }
    }

    return stack.pop();
}

console.log(evalRPN("+ 3 4"));
