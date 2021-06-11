/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let mArr = []
  let nArr = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        if (!mArr.includes(i)) {
          mArr.push(i)
        }
        if (!nArr.includes(j)) {
          nArr.push(j)
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mArr.includes(i) || nArr.includes(j)) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
};
// @lc code=end

