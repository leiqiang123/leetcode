/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
var addTwoNumbersByStack = function(l1, l2) {
  let stack1 = []
  let stack2 = []
  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }
  let pos = 0
  let preNode = null
  while (stack1.length || stack2.length) {
    let num1 = stack1.length === 0 ? 0 : stack1.pop()
    let num2 = stack2.length === 0 ? 0 : stack2.pop()
    let total = num1 + num2 + pos
    if (total > 9) {
      pos = 1
    } else {
      pos = 0
    }
    preNode = new ListNode(total % 10, preNode)
  }
  if (pos === 1) preNode = new ListNode(1, preNode)
  return preNode
};
var addTwoNumbers = function(l1, l2) {
  let str1 = ''
  let str2 = ''
  while (l1) {
    str1 += l1.val
    l1 = l1.next
  }
  while (l2) {
    str2 += l2.val
    l2 = l2.next
  }
  let sum = String(BigInt(str1) + BigInt(str2))
  let res = new ListNode(Number(sum[0]))
  let head = res
  for (let i = 1; i < sum.length; i++) {
    head.next = new ListNode(Number(sum[i]))
    head = head.next
  }
  return res
}
// @lc code=end

