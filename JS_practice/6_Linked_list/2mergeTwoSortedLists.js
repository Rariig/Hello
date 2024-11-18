/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1); // Dummy node to simplify logic
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1; // Attach list1's node
            list1 = list1.next;  // Move list1 forward
        } else {
            current.next = list2; // Attach list2's node
            list2 = list2.next;  // Move list2 forward
        }
        current = current.next; // Move current forward
    }

    // Attach remaining nodes (one of these lists will be null)
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next; // Skip the dummy node and return the merged list
};
