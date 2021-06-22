/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 1) return 0
  let dp = [0]
  let min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min)
    dp[1] = Math.max(dp[0], prices[i] - min)
    dp[0] = dp[1]
  }
  return dp[1]
};
// @lc code=end

