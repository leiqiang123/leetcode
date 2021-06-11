/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let end = digits.length - 1
  let carry = 1
  for (let i = end; i >= 0; i--) {
    if (digits[i] + carry > 9) {
      carry = 1
      digits[i] = 0
    } else {
      digits[i] += 1
      return digits
    }
  }
  if (carry === 1) {
    digits.unshift(1)
  }
  return digits
};
// @lc code=end

