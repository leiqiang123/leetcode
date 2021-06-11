/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

/*
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
*/
// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0])
  let res = []
  let i = 0
  while (i < intervals.length) {
    let max = intervals[i][1]
    let j = i + 1
    while (intervals[j] && intervals[j][0] <= max && j < intervals.length) {
      max = Math.max(max, intervals[j][1])
      j++
    }
    res.push([intervals[i][0], max])
    i = j
  }
  return res
};
// @lc code=end

