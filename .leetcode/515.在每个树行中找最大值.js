/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function(root) {
  let res = []
  let dfs = (node, depth) => {
    if (!node) return null
    if (res[depth] === undefined) {
      res[depth] = node.val
    } else {
      res[depth] = Math.max(res[depth], node.val)
    }
    dfs(node.left, depth + 1)
    dfs(node.right, depth + 1)
  }
  dfs(root, 0)
  return res
};
// @lc code=end

