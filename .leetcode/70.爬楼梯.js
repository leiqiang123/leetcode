/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) return 1
  if (n === 2) return 2
  let dp = []
  dp[0] = 1
  dp[1] = 2
  for (let i = 2; i < n; i++) {
    dp[2] = dp[0] + dp[1]
    dp[0] =  dp[1]
    dp[1] = dp[2]
  }
  return dp[2]
};
// @lc code=end

