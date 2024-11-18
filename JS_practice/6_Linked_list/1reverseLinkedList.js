/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextNode = current.next; // Save the next node
        current.next = prev;        // Reverse the link
        prev = current;             // Move prev forward
        current = nextNode;         // Move current forward
    }

    return prev; // prev is the new head
};
