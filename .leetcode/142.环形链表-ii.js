/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycleByMap = function(head) {
  let map = new Map()
  while (head) {
    if (map.has(head)) {
      return head
    } else {
      map.set(head, true)
      head = head.next
    }
  }
  return null
}
// 快慢指针
var detectCycle = function(head) {
  if (head) {
    let fast = head
    let slow = head
    while (fast) {
      slow = slow.next
      if (fast.next) {
        fast = fast.next.next
      } else {
        return null
      }
      if (slow === fast) {
        let res = head
        while (res !== slow) {
          res = res.next
          slow = slow.next
        }
        return res
      }
    }
    return null
  }
  return null
}
// @lc code=end

