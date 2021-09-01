/*
 * @lc app=leetcode.cn id=539 lang=javascript
 *
 * [539] 最小时间差
 */

// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  let points = timePoints.map(item => {
    let items = item.split(':')
    return Number(items[0]) * 60 + Number(items[1])
  }).sort((a, b) => a - b)
  let total = 24 * 60
  let res = total - points[points.length - 1] + points[0]
  for (let i = 1; i < points.length; i++) {
    res = Math.min(res, points[i] - points[i - 1])
  }
  return res
};
// @lc code=end

