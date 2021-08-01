/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length === 0) return true
  let left = 0
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[left]) {
      if (left === s.length - 1) {
        return true
      } else {
        left++
      }
    }
  }
  return false
};
// @lc code=end

