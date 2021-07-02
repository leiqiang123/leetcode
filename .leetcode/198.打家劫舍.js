/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])
  let dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    dp[2] = Math.max(dp[0] + nums[i], dp[1])
    dp[0] = dp[1]
    dp[1] = dp[2]
  }
  return dp[2]
};
// @lc code=end

