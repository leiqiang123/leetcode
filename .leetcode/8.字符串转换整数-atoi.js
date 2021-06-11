/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let res = ''
  let index = 0
  let sign = ''
  while (s[index] === ' ') {
    index++
  }
  while (s[index] === '-' || s[index] === '+') {
    if (sign) {
      return 0
    }
    sign += s[index]
    index++
  }
  while (s[index] && s[index].charCodeAt() >= 48 && s[index].charCodeAt() <= 57) {
    res += s[index]
    index++
  }
  res = Number(sign + res) || 0
  if (res < Math.pow(-2, 31)) return Math.pow(-2, 31)
  if (res > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1
  return res
};
// @lc code=end

