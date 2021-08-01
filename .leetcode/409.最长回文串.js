/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let map = new Map
  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      res += 2
      map.delete(s[i])
    } else {
      map.set(s[i], 1)
    }
  }
  if (map.size > 0) {
    res += 1
  }
  return res
};
// @lc code=end

