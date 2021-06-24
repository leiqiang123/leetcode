/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}
var cloneGraph = function(node) {
  let map = new Map()
  let deepClone = (node) => {
    if (!node) return node
    if (map.has(node)) {
      return map.get(node)
    } else {
      let newNode = new Node()
      newNode.val = node.val
      map.set(node, newNode)
      node.neighbors.forEach(item => {
        newNode.neighbors.push(deepClone(item))
      })
      return newNode
    }
  }
  return deepClone(node)
};
// @lc code=end

