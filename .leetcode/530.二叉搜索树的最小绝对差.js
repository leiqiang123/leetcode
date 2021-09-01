/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let min = Number.MAX_SAFE_INTEGER
  let prev = -1
  let dfs = (node) => {
    if (!node) return null
    dfs(node.left)
    if (prev === -1) {
      prev = node.val
    } else {
      min = Math.min(min, node.val - prev)
      prev = node.val
    }
    dfs(node.right)
  }
  dfs(root)
  return min
};
// @lc code=end

