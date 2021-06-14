/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
var deleteDuplicates = function(head) {
  if (!head || !head.next) return head
  let res = null
  let sign = 0
  while (head && head.next) {
    if (head.val === head.next.val) {
      head = head.next
      sign++
    } else {
      if (sign === 0) {
        res = head
        break
      } else {
        res = head.next
        head = head.next
        sign = 0
      }
    }
  }
  if (sign !== 0) return null

  let newHead = res.next
  let cur = res
  
  while (newHead && newHead.next) {
    if (newHead.val === newHead.next.val) {
      sign++
    } else {
      if (sign === 0) {
        cur = newHead
      } else {
        cur.next = newHead.next
        sign = 0
      }
    }
    newHead = newHead.next
  }
  if (sign !== 0) cur.next = null
  return res
};
// @lc code=end

