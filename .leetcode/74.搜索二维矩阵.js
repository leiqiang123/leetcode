/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  matrix = matrix.flat()
  let low = 0
  let high = matrix.length - 1
  while (low <= high) {
    let mid = Math.floor((high - low) / 2) + low
    x = matrix[mid]
    if (x < target) {
      low = mid + 1
    } else if (x > target) {
      high = mid - 1
    } else {
      return true
    }
  }
  return false
};
// @lc code=end

