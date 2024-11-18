/**
 * @param {number} n
 * @return {string[]}
 */

function generateParenthesis(n) {
    const result = [];

    function backtrack(currentString, open, close) {
        if (currentString.length === 2 * n) {
            result.push(currentString);
            return;
        }

        // Add an opening bracket if we have remaining open brackets
        if (open < n) {
            backtrack(currentString + "(", open + 1, close);
        }

        // Add a closing bracket if it doesn't exceed the number of open brackets
        if (close < open) {
            backtrack(currentString + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
}