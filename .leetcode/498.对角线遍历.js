/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
  let m = mat.length
  let n = mat[0].length
  let row = 0
  let col = 0
  let total = m * n
  let res = new Array(total).fill(0)
  for (let i = 0; i < total; i++) {
    res[i] = mat[row][col]
    if ((row + col) % 2 === 0) {
      if (col === n - 1) {
        row++
      } else if (row === 0) {
        col++
      } else {
        row--
        col++
      }
    } else {
      if (row === m - 1) {
        col++
      } else if (col === 0) {
        row++
      } else {
        row++
        col--
      }
    }
  }
  return res
};
// @lc code=end

