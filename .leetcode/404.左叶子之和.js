/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
  if (!root) return 0
  let res = 0
  let dfs = root => {
    if (root.left) {
      if (isLeafNode(root.left)) {
        res += root.left.val
      } else {
        dfs(root.left)
      }
    }
    if (root.right && !isLeafNode(root.right)) {
      dfs(root.right)
    }
  }
  let isLeafNode = node => {
    return !node.left && !node.right
  }
  dfs(root)
  return res
};
// @lc code=end

