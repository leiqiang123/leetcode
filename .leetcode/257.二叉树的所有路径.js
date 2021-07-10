/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return []
  let res = []
  let dfs = (root, path) => {
    path += root.val
    if (root.left ||root.right) {
      if (root.left) {
        dfs(root.left, path + '->')
      }
      if (root.right) {
        dfs(root.right, path + '->')
      }
    } else {
      res.push(path)
    }
  }
  dfs(root, '')
  return res
};
// @lc code=end

