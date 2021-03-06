/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLocaleLowerCase()
  let left = 0
  let right = s.length - 1
  let regx = /^[A-Za-z0-9]*$/
  while (left <= right) {
    if (!regx.test(s[left])) {
      left++
    } else if (!regx.test(s[right])) {
      right--
    } else if (s[left] === s[right]) {
      left++
      right--
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

