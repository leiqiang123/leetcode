/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let n = nums.length
  if (n <= 2) {
    return Math.max(...nums)
  }
  let dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < n - 1; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  let dp2 = []
  dp2[0] = nums[1]
  dp2[1] = Math.max(nums[1], nums[2])
  for (let i = 3; i < n; i++) {
    dp2[i - 1] = Math.max(dp2[i - 2], dp2[i - 3] + nums[i])
  }
  return Math.max(dp[n - 2], dp2[n - 2])
};
// @lc code=end

