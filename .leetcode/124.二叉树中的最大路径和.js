/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function(root) {
  let res = -Infinity
  let dfs = (node) => {
    if (node === null) return 0
    let leftSum = Math.max(0, dfs(node.left))
    let rightSum = Math.max(0, dfs(node.right))
    // 返回以当前节点为顶级节点的路径的最大值
    res = Math.max(res, node.val + leftSum + rightSum)
    // 返回路过当前节点的路径的最大值
    return node.val + Math.max(leftSum, rightSum)
  }
  dfs(root)
  return res
};
// @lc code=end

