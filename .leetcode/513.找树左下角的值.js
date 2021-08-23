/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function(root) {
  let currMaxDepth = -1
  let res = 0
  let dfs = (node, currDepth) => {
    if (!node) return null
    if (currDepth > currMaxDepth) {
      currMaxDepth = currDepth
      res = node.val
    }
    dfs(node.left, currDepth + 1)
    dfs(node.right, currDepth + 1)
  }
  dfs(root, 0)
  return res
};
// @lc code=end

