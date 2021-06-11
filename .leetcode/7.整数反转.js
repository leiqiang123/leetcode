/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = 0
  let last = 0
  while (x !== 0) {
    let temp = x % 10
    last = res
    res = res * 10 + temp
    if (Math.pow(-2, 31) > res || res > Math.pow(2, 31) - 1) {
      return 0
    }
    x = parseInt(x / 10)
  }
  return res
};
// @lc code=end

