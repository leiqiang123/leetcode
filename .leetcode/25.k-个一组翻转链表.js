/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function(head, k) {
  if (k === 1) return head
  let headNode = null
  return exchangeNode(head, k, headNode)
};
function exchangeNode(node, k, headNode) {
  let nodeList = []
  let len = k
  while (len && node) {
    nodeList.push(node)
    node = node.next
    len--
  }
  let nextLinkNode = node
  let length = nodeList.length
  if ( length < k) {
    return false
  } else {
    node = nodeList.pop()
    if (headNode) {
      headNode.next = node
    } else {
      headNode = node
    }
    while (nodeList.length) {
      node.next = nodeList.pop()
      node = node.next
    }
    node.next = nextLinkNode
    exchangeNode(nextLinkNode, k, node)
    return headNode
  }
}
// @lc code=end

