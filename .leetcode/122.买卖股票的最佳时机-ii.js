/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 1) return 0
  let res = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      res += prices[i + 1] - prices[i]
    }
  }
  return res
};
// @lc code=end

