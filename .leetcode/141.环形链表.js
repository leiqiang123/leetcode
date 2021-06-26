/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycleByMap = function(head) {
  let map = new Map()
  while (head) {
    if (map.has(head)) {
      return true
    } else {
      map.set(head, true)
      head = head.next
    }
  }
  return false
};
// 快慢指针
var hasCycle = function(head) {
  if (head) {
    let fast = head
    let slow = head
    while (fast) {
      slow = slow.next
      if (fast.next) {
        fast = fast.next.next
      } else {
        return false
      }
      if (slow === fast) return true
    }
    return false
  }
  return false
}
// @lc code=end

