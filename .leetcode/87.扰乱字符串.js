/*
 * @lc app=leetcode.cn id=87 lang=javascript
 *
 * [87] 扰乱字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  let isCheck = s1.split('').sort().join('') === s2.split('').sort().join('')
  if (!isCheck) return false
  if (s1.length < 4) return true
  for (let i = 1; i < s1.length; i++) {
    if (isScramble(s1.substr(0, i), s2.substr(0, i)) && isScramble(s1.substr(i, s1.length - i), s2.substr(i, s1.length - i))) return true
    if (isScramble(s1.substr(0, i), s2.substr(s1.length - i, i)) && isScramble(s1.substr(i, s1.length - i), s2.substr(0, s1.length - i))) return true
  }
  return false
};
// @lc code=end

