/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  if (left === right) return head
  let newHead = head
  let preHead = null
  let deep = 1
  while (newHead) {
    if (deep === left) {
      let cur = newHead
      let nowNode = newHead.next
      while (right > left) {
        let next = nowNode.next
        nowNode.next = cur
        cur = nowNode
        nowNode = next
        right--
      }
      if (preHead) {
        preHead.next = cur
        newHead.next = nowNode
        return head
      } else {
        newHead.next = nowNode
        return cur
      }
    }
    deep++
    preHead = newHead
    newHead = newHead.next
  }
};
// @lc code=end

