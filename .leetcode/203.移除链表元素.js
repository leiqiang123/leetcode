/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
var removeElements = function(head, val) {
  let newHead = new ListNode()
  newHead.next = head
  let resHead = newHead
  while (newHead.next) {
    if (newHead.next.val === val) {
      newHead.next = newHead.next.next
    } else {
      newHead = newHead.next
    }
  }
  return resHead.next
};
// @lc code=end

