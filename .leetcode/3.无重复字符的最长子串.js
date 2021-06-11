/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let result = 0
  let str = ''
  for (let i = 0; i < s.length; i++) {
    let lastLocation = str.indexOf(s[i])
    str += s[i]
    if (lastLocation !== -1) {
      str = str.substring(lastLocation + 1)
    }
    if (str.length > result) {
      result = str.length
    }
  }
  return result
};
// @lc code=end

