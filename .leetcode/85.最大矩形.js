/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  let area = 0
  let stack = []
  for (let i = 0; i < matrix.length; i++) {
    let heights = [0, ...height(i), 0]
    for (let j = 0; j < heights.length; j++) {
      if (heights[j] < heights[stack[stack.length - 1]]) {
        while (heights[j] < heights[stack[stack.length - 1]]) {
          let stackTopIndex = stack.pop()
          area = Math.max(area, heights[stackTopIndex] * (j - stack[stack.length - 1] - 1))
        }
      }
      stack.push(j)
    }
    stack = []
  }
  function height(index) {
    let heights = []
    for (let i = 0; i < matrix[0].length; i++) {
      let curHeight = 0
      let m = index
      while (m >= 0) {
        if (matrix[m][i] === '1') {
          curHeight++
          m--
        } else {
          break
        }
      }
      heights.push(curHeight)
    }
    return heights
  }
  return area
};
// @lc code=end

