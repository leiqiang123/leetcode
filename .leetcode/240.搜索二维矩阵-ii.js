/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let m = matrix.length
  let right = matrix[0].length - 1
  let left = 0
  while (left < m && right >= 0) {
    if (matrix[left][right] === target) {
      return true
    } else if (matrix[left][right] > target) {
      right--
    } else {
      left++
    }
  }
  return false
};
// @lc code=end

