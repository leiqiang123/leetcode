/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return null
  let result = new ListNode()
  let next = result
  while (l1 || l2) {
    if (!l1) {
      next.val = l2.val
      next.next = l2.next
      break
    }
    if (!l2) {
      next.val = l1.val
      next.next = l1.next
      break
    }
    if (l1.val > l2.val) {
      next.val = l2.val
      l2 = l2.next
    } else if (l1.val < l2.val) {
      next.val = l1.val
      l1 = l1.next
    } else {
      next.val = l1.val
      next.next = new ListNode(l2.val)
      next = next.next
      l1 = l1.next
      l2 = l2.next
    }
    if (l1 || l2) next = next.next = new ListNode()
  }
  return result
};
// @lc code=end

