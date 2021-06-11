/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  lists = lists.filter(item => item)
  if (lists.length === 0) return null
  let result = lists[0]
  for (let i = 1; i < lists.length; i++) {
    result = mergeTwoLists(result, lists[i])
  }
  return result
};
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

