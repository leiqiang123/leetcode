/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  if (timeSeries.length === 0) return 0
  let res = duration
  for (let i = 1; i < timeSeries.length; i++) {
    if (timeSeries[i] - timeSeries[i - 1] >= duration) {
      res += duration
    } else {
      res += timeSeries[i] - timeSeries[i - 1]
    }
  }
  return res
};
// @lc code=end

