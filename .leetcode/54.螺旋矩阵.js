/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

 /*
 
 1 2  3  4
 5 6  7  8
 9 10 11 12
 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return []
  let res = []
  let left = 0
  let top = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length - 1
  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i])
    }
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right])
    }
    for (let i = right; i > left; i--) {
      res.push(matrix[bottom][i])
    }
    for (let i = bottom; i > top; i--) {
      res.push(matrix[i][left])
    }
    left++
    right--
    top++
    bottom--
  }
  if (top === bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
  } else if (left === right) {
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][left])
    }
  }
  return res
};
// @lc code=end

