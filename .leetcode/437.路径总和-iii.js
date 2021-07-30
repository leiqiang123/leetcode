/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  let res = 0
  let dfs = (node) => {
    if (!node) return
    dfsSum(node, 0)
    dfs(node.left)
    dfs(node.right)
  }
  let dfsSum = (node, sum) => {
    if (!node) return
    sum = node.val + sum
    if (sum === targetSum) {
      res++
    }
    dfsSum(node.left, sum)
    dfsSum(node.right, sum)
  }
  dfs(root)
  return res
};
// @lc code=end

