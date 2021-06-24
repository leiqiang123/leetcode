/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candyByOne = function(ratings) {
  let res = 0
  let n = ratings.length
  let left = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    if (i > 0 && ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1
    } else {
      left[i] = 1
    }
  }
  let right = 0
  for (let i = n - 1; i >= 0; i--) {
    if (i < n - 1 && ratings[i] > ratings[i + 1]) {
      right++
    } else {
      right = 1
    }
    res += Math.max(left[i], right)
  }
  return res
};
var candy = function (ratings) {
  let n = ratings.length
  let ret = 1
  let inc = 1, dec = 0, pre = 1
  for (let i = 1; i <n; i++) {
    if (ratings[i] >= ratings[i - 1]) {
      dec = 0
      if (ratings[i] === ratings[i - 1]) pre = 1
      else pre++
      ret += pre
      inc = pre
    } else {
      dec++
      if (dec === inc) {
        dec++
      }
      ret += dec
      pre = 1
    }
  }
  return ret
}
// @lc code=end

