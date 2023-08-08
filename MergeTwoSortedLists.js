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

// Time complexity of the recursive solution is: O(n + m).
// with m and n equal to the length of each list.

var mergeTwoLists = function(list1, list2) {
    // First, to accomplish this recursively, we must deal with the base cases:
    if (!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    } 
    // Then we can compare values and splice them together recursively:
    else if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
