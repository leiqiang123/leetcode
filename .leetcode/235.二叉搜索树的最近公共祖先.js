/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let val = root.val
  let p1 = p.val
  let q1 = q.val
  if ((val >= p1 && val <= q1) || (val <= p1 && val >= q1)) return root
  if (val > p1) return lowestCommonAncestor(root.left, p, q)
  if (val < p1) return lowestCommonAncestor(root.right, p, q)
};
// @lc code=end

