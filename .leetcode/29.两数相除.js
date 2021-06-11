/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend === 0) return 0
  let sign
  if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
    sign = '+'
  } else {
    sign = '-'
  }
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  let res = 0
  while (dividend - divisor >= 0) {
    dividend = dividend - divisor
    res++
  }
  if (Math.pow(-2, 31) > Number(sign + res)) {
    return Math.pow(-2, 31)
  }
  if (Number(sign + res) > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  }
  return Number(sign + res)
};
// @lc code=end

