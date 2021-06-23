/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function(root) {
  let res = 0
  let dfs = (node, num) => {
    if (node.left === null && node.right === null) {
      res = res + num * 10 + node.val
      return
    }
    if (node.left) {
      dfs(node.left, num * 10 + node.val)
    }
    if (node.right) {
      dfs(node.right, num * 10 + node.val)
    }
  }
  dfs(root, 0)
  return res
};
// @lc code=end

