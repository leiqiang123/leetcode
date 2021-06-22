/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBSTByRecursion = function(root) {
  let dfs = (tree, min, max) => {
    if (!tree) return true
    if (tree.val >= max || tree.val <= min) {
      return false
    }
    return dfs(tree.left, min, tree.val) && dfs(tree.right, tree.val, max)
  }
  return dfs(root, -Infinity, Infinity)
};
var isValidBSTByMidSort = function(root) {}
var isValidBST = function(root) {}
// @lc code=end

