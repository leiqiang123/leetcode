/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[1] - b[1])
  let res = 0
  let start = intervals[0][0]
  let end = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      start = intervals[i][0]
      end = intervals[i][1]
    } else {
      res++
    }
  }
  return res
};
// @lc code=end

