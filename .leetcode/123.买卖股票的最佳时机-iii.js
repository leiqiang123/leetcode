/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let pay1 = -prices[0]
  let sell1 = 0
  let pay2 = -prices[0]
  let sell2 = 0
  for (let i = 1; i < prices.length; i++) {
    pay1 = Math.max(pay1, -prices[i])
    sell1 = Math.max(sell1, pay1 + prices[i])
    pay2 = Math.max(pay2, sell1 - prices[i])
    sell2 = Math.max(sell2, pay2 + prices[i])
  }
  return sell2
};
// @lc code=end

