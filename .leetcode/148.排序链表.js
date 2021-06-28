/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
function merge(head1, head2) {
  let dummyHead = new ListNode()
  let temp = dummyHead
  while (head1 && head2) {
    if (head1.val <= head2.val) {
      temp.next = head1
      head1 = head1.next
    } else {
      temp.next = head2
      head2 = head2.next
    }
    temp = temp.next
  }
  temp.next = head1 ? head1 : head2
  return dummyHead.next
}
var sortList = function(head) {
  let listLength = 0
  let node = head
  while (node) {
    listLength++
    node = node.next
  }
  let dummyHead = new ListNode(0, head)
  for (let len = 1; len <= listLength; len = len * 2) {
    let pre = dummyHead
    let cur = dummyHead.next
    while (cur) {
      let head1 = cur
      for (let i = 1; i < len && cur.next; i++) {
        cur = cur.next
      }
      let head2 = cur.next
      cur.next = null
      cur = head2
      for (let i = 1; i < len && cur && cur.next; i++) {
        cur = cur.next
      }
      let next = null
      if (cur) {
        next = cur.next
        cur.next = null
      }
      let merged = merge(head1, head2)
      pre.next = merged
      while (pre.next) {
        pre = pre.next
      }
      cur = next
    }
  }
  return dummyHead.next
};
// @lc code=end

