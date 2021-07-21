/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left = 0
  let n = s.length - 1
  while (left < n - left) {
    let temp = s[left]
    s[left] = s[n - left]
    s[n - left] = temp
    left++
  }
  return s
};
// @lc code=end

