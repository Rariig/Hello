/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Define the structure of a tree node
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

function search(nums, target) {
  // Helper function to build the tree
  function buildTree(nums) {
    if (nums.length === 0) {
      return null;
    }
    
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);

    // Recursively build left and right subtrees
    root.left = buildTree(nums.slice(0, mid));
    root.right = buildTree(nums.slice(mid + 1));

    return root;
  }

  // Helper function to search the BST
  function searchBST(root, target) {
    if (root === null) {
      return -1; // Target not found
    }
    
    if (root.value === target) {
      return root; // Target found
    }

    // Recursively search left or right subtree
    if (target < root.value) {
      return searchBST(root.left, target);
    } else {
      return searchBST(root.right, target);
    }
  }

  // Build the binary search tree from the nums array
  const root = buildTree(nums);

  // Search for the target in the tree
  const result = searchBST(root, target);
  
  return result !== -1 ? `Target found at position: ${nums.indexOf(result)}` : 'Target not found';
}

// Example usage
const nums = [1, 2, 3, 4, 5, 6, 7];
const target = 5;
console.log(search(nums, target)); // Target found: 5