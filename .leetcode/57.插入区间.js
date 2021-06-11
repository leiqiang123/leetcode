/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  intervals.push(newInterval)
  intervals = intervals.sort((a, b) => a[0] - b[0])
  let res = []
  let i = 0
  while (i < intervals.length) {
    let max = intervals[i][1]
    let j = i + 1
    while (intervals[j] && j < intervals.length && intervals[j][0] <= max) {
      max = Math.max(max, intervals[j][1])
      j++
    }
    res.push([intervals[i][0], max])
    i = j
  }
  return res
};
// @lc code=end

