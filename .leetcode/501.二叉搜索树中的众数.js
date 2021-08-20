/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function(root) {
  let base = 0
  let count = 0
  let maxCount = 0
  let res = []
  let update = (val) => {
    if (val === base) {
      ++count
    } else {
      count = 1
      base = val
    }
    if (count === maxCount) {
      res.push(base)
    }
    if (count > maxCount) {
      maxCount = count
      res = [base]
    }
  }
  let dfs = (node) => {
    if (!node) return
    dfs(node.left)
    update(node.val)
    dfs(node.right)
  }
  dfs(root)
  return res
};
// @lc code=end

