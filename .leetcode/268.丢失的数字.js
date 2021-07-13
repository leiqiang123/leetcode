/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let n = nums.length
  let total1 = n * (n + 1) / 2
  let total2 = 0
  for (let i = 0; i < n; i++) {
    total2 += nums[i]
  }
  return total1 - total2
};
// @lc code=end

