/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let left = 1
  let deleteNode = head
  let deletePreNode = null
  let temp = head
  while (temp) {
    if (left - n > 0) {
      deletePreNode = deleteNode
      deleteNode = deleteNode.next
    }
    temp = temp.next
    left++
  }
  if (deletePreNode) {
    deletePreNode.next = deleteNode.next
  } else {
    head = head.next
  }
  return head
};
// @lc code=end

