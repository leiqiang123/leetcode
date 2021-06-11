/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (k === 0) return head
  if (!head || !head.next) return head
  let nodeNums = 0
  let tempHead = head
  let endLinkNode = null
  while (tempHead) {
    nodeNums++
    if (!tempHead.next) {
      endLinkNode = tempHead
    }
    tempHead = tempHead.next
  }
  if (k % nodeNums === 0) return head
  nodeNums = nodeNums - k % nodeNums
  let newHead = head
  let newEnd = null
  while (nodeNums > 0) {
    newEnd = newHead
    newHead = newHead.next
    nodeNums--
  }
  newEnd.next = null
  endLinkNode.next = head
  return newHead
};
// @lc code=end

