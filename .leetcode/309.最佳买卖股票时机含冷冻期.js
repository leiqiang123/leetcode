/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let dp1 = -prices[0]
  let dp2 = 0
  let dp3 = 0
  for (let i = 1; i < prices.length; i++) {
    let temp1 = Math.max(dp1, dp3 - prices[i])
    let temp2 = dp1 + prices[i]
    let temp3 = Math.max(dp2, dp3)
    dp1 = temp1
    dp2 = temp2
    dp3 = temp3
  }
  return Math.max(dp2, dp3)
};
// @lc code=end

