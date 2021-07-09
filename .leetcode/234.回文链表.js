/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
// 反转链表
let reverseList = (head) => {
  let prev = null
  let curr = head
  while (curr) {
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }
  return prev
}
// 快慢指针寻找链表中间点
let endOfFirstHalf = (head) => {
  let fast = head
  let slow = head
  while (fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}
var isPalindrome = function(head) {
  if (!head) return true
  let middle = endOfFirstHalf(head)
  let endReverseList = reverseList(middle.next)
  let p1 = head
  let p2 = endReverseList
  let res = true
  while (res && p1 && p2) {
    if (p1.val !== p2.val) res = false
    p1 = p1.next
    p2 = p2.next
  }
  // 还原翻转的链表
  middle.next = reverseList(endReverseList)
  return res
};
// @lc code=end

