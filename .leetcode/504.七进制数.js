/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  let next = Math.abs(num)
  let res = ''
  while (next >= 7) {
    res = next % 7 + res
    next = next / 7 | 0
  }
  res = next + res
  return num >= 0 ? res : '-' + res
};
// @lc code=end

