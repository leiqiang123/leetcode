/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function(root) {
  let res = 0
  let dfs = node => {
    if (!node) return 0
    let leftTotal = dfs(node.left)
    let rightTotal = dfs(node.right)
    res += Math.abs(leftTotal - rightTotal)
    return leftTotal + rightTotal + node.val
  }
  dfs(root)
  return res
};
// @lc code=end

