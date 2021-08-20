/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  let max = Math.max(...score)
  let arr = new Array(max + 1).fill(-1)
  for (let i = 0; i < score.length; i++) {
    arr[score[i]] = i
  }
  let res = []
  let num = 1
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== -1) {
      if (num > 3) {
        res[arr[i]] = String(num)
      } else if (num === 1) {
        res[arr[i]] = 'Gold Medal'
      } else if (num === 2) {
        res[arr[i]] = 'Silver Medal'
      } else if (num === 3) {
        res[arr[i]] = 'Bronze Medal'
      }
      num++
    }
  }
  return res
};
// @lc code=end

