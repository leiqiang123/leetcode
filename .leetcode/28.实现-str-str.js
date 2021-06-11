/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0
  if (haystack.length < needle.length) return -1
  let needLen = needle.length
  let left = 0
  let right = 0
  for (let i = 0; i <= haystack.length - needLen; i++) {
    if (haystack[i] === needle[0]) {
      left = i + 1
      right = 1
      while (right < needLen && haystack[left] === needle[right]) {
        left++
        right++
      }
      if (right === needLen) return i
    }
  }
  return -1
};
// @lc code=end

