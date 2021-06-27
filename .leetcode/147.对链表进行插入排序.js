/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function(head) {
  let sortStart = new ListNode()
  sortStart.next = head
  while (head.next) {
    if (head.next.val < head.val) {
      let cur = head.next
      head.next = cur.next
      let inLoop = sortStart
      while (inLoop.next.val < cur.val) {
        inLoop = inLoop.next
      }
      cur.next = inLoop.next
      inLoop.next = cur
    } else {
      head = head.next
    }
  }
  return sortStart.next
};
// @lc code=end

