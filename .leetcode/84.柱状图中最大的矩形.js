/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let area = 0
  let stack = []
  heights = [0, ...heights, 0]
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] < heights[stack[stack.length - 1]]) {
      while (heights[i] < heights[stack[stack.length - 1]]) {
        let stackTopIndex = stack.pop()
        area = Math.max(area, heights[stackTopIndex] * (i - stack[stack.length - 1] - 1))
      }
    }
    stack.push(i)
  }
  return area
};
// @lc code=end

