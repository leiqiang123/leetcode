/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversalByRecursion = function(root) {
  let res = []
  let inorder = (treeNode) => {
    if (treeNode) {
      inorder(treeNode.left)
      res.push(treeNode.val)
      inorder(treeNode.right)
    }
  }
  inorder(root)
  return res
};
var inorderTraversalByStack = function(root) {
  let res = []
  let stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}
var inorderTraversalByMorris = function(root) {
  let res = []
  let pre = null
  while (root) {
    if (root.left) {
      pre = root.left
      while (pre.right && pre.right !== root) {
        pre = pre.right
      }
      if (!pre.right) {
        pre.right = root
        root = root.left
      } else {
        res.push(root.val)
        pre.right = null
        root = root.right
      }
    } else {
      res.push(root.val)
      root = root.right
    }
  }
  return res
}
// @lc code=end

