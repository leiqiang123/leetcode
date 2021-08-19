/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  let sum = nums.reduce((total, item) => total + item)
  let diff = sum - target
  if (diff < 0 || diff % 2 !== 0) {
    return 0
  }
  let reg = Math.floor(diff / 2)
  let dp = new Array(reg + 1).fill(0)
  dp[0] = 1
  for (const num of nums) {
    for (let j = reg; j >= num; j--) {
      dp[j] += dp[j - num]
    }
  }
  return dp[reg]
};
// @lc code=end

