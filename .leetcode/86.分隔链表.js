/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let newHead = head
  let targetNode = null
  let preTargetNode = null
  let sign = false
  while (newHead) {
    if (sign) {
      if (newHead.val < x) {
        targetNode.next = newHead.next
        if (preTargetNode) {
          newHead.next = preTargetNode.next
          preTargetNode.next = newHead
          preTargetNode = newHead
        } else {
          newHead.next = head
          head = newHead
          preTargetNode = head
        }
        newHead = targetNode.next
      } else {
        targetNode = newHead
        newHead = newHead.next
      }
    } else {
      if (newHead.val >= x) {
        targetNode = newHead
        sign = true
      } else {
        preTargetNode = newHead
      }
      newHead = newHead.next
    }
  }
  return head
};
// @lc code=end

