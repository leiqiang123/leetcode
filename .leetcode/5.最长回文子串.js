/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s
  let start = 0
  let end = 0
  for (let i = 0; i < s.length; i++) {
    let len1 = expendCenter(s, i, i)
    let len2 = expendCenter(s, i, i + 1)
    let len = len1.length > len2.length ? len1 : len2
    if (len.length > end - start) {
      start = len.left
      end = len.right
    }
  }
  return s.substring(start, end + 1)
};
function expendCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }
  return {
    length: right - left - 1,
    left: ++left,
    right: --right
  }
}
// @lc code=end

