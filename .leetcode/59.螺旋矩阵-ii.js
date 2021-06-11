/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let res = []
  for (let i = 0; i < n; i++) {
    res.push([])
  }
  let total = n * n
  let num = 1
  let top = 0
  let bottom = n - 1
  let left = 0
  let right = n - 1
  while (num <= total && left < right) {
    for (let i = left; i < right; i++) {
      res[top][i] = num
      num++
    }
    for (let i = top; i < bottom; i++) {
      res[i][right] = num
      num++
    }
    for (let i = right; i > left; i--) {
      res[bottom][i] = num
      num++
    }
    for (let i = bottom; i > top; i--) {
      res[i][left] = num
      num++
    }
    top++
    left++
    right--
    bottom--
  }
  if (left === right) {
    res[left][left] = total
  }
  return res
};
// @lc code=end

