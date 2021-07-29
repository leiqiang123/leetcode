/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let n = s.length
  let codeArr = new Array(26).fill(0)
  let left = 0
  let right = 0
  let maxn = 0
  while (right < n) {
    codeArr[s[right].charCodeAt() - 'A'.charCodeAt()]++
    maxn = Math.max(maxn, codeArr[s[right].charCodeAt() - 'A'.charCodeAt()])
    if (right - left + 1 - maxn > k) {
      codeArr[s[left].charCodeAt() - 'A'.charCodeAt()]--
      left++
    }
    right++
  }
  return right - left
};
// @lc code=end

