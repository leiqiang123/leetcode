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
  let n = nums.length
  let stack = [nums[n - 1]]
  let maxK = -Number.MAX_SAFE_INTEGER
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < maxK) return true
    while (stack.length && nums[i] > stack[stack.length - 1]) {
      maxK = stack[stack.length - 1]
      stack.pop()
    }
    if (nums[i] > maxK) {
      stack.push(nums[i])
    }
  }
  return false
};
// @lc code=end

