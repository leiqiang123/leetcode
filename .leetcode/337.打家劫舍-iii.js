/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function(root) {
  let f = new Map
  let g = new Map
  let dfs = (root) => {
    if (!root) return
    dfs(root.left)
    dfs(root.right)
    f.set(root, root.val + (g.get(root.left) || 0) + (g.get(root.right) || 0))
    g.set(root, Math.max(f.get(root.left) || 0, g.get(root.left) || 0) + Math.max(f.get(root.right) || 0, g.get(root.right) || 0))
  }
  dfs(root)
  return Math.max(f.get(root) || 0, g.get(root) || 0)
};
var robByHash = function(root) {
  let dfs = function(root) {
    if (!root) return [0, 0]
    let left = dfs(root.left)
    let right = dfs(root.right)
    let selected = root.val + left[1] + right[1]
    let noSelected = Math.max(...left) + Math.max(...right)
    return [selected, noSelected]
  }
  return Math.max(...dfs(root))
}
// @lc code=end

