/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {
  let result = new ListNode()
  let carryNum = 0
  let next = result
  while (l1 || l2) {
    let l1Value = l1 ? l1.val : 0
    let l2Value = l2 ? l2.val : 0
    let value = l1Value + l2Value + carryNum
    next.val = value%10
    carryNum = Math.floor(value/10)
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
    if (l1 || l2) {
      next.next = new ListNode()
      next = next.next
    } else {
      if (carryNum === 1) {
        next.next = new ListNode(1)
      }
    }
  }
  return result
};
// @lc code=end

