/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) return head
  let result = head.next
  let changeNode = null
  while (head && head.next) {
    let temp1 = head
    let temp2 = head.next.next
    head = head.next
    head.next = temp1
    head.next.next = temp2
    if (changeNode) {
      changeNode.next = head
    }
    changeNode = head.next
    head = temp2
  }
  return result
};
// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }
// var a = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
// console.log(swapPairs(a))
// @lc code=end

