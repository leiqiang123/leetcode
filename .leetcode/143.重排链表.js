/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
var reorderList = function(head) {
  let stack = []
  let res = head
  while (head) {
    stack.push(head)
    head = head.next
  }
  let mid = Math.floor(stack.length / 2)
  stack[mid].next = null
  for (let i = 0; i < mid; i++) {
    let next = stack.pop()
    stack[i].next = next
    next.next = stack[i + 1] ? stack[i + 1] : null
  }
  return res
};
// @lc code=end

