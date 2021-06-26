/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
function Node(val, next, random) {
  this.val = val;
  this.next = next ? next : null;
  this.random = random ? random : null;
};
var copyRandomList = function(head) {
  let map = new Map()
  let copy = (node) => {
    if (!node) return null
    if (map.has(node)) {
      return map.get(node)
    } else {
      let newNode = new Node(node.val)
      map.set(node, newNode)
      newNode.next = copy(node.next)
      newNode.random = copy(node.random)
      return newNode
    }
  }
  return copy(head)
};
// @lc code=end

