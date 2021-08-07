/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132 模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  let stack = []
  for (let i = 0; i < nums.length; i++) {
    if (stack.length < 2) {
      stack.push(nums[i])
      if (stack.length === 2 && stack[0] >= stack[1]) {
        stack.shift()
      }
    } else {
      if (nums[i] < stack[1]) {
        if (nums[i] > stack[0]) {
          return true
        }
      }
      stack = [nums[i]]
    }
  }
  return false
};
// @lc code=end

