/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let res = ''
  let space = 0
  let word = ''
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (space === 0 && word) {
        if (res) {
          res = res + ' ' + word
        } else {
          res = word
        }
        word = ''
      }
      space++
    } else {
      word = s[i] + word
      space = 0
    }
  }
  if (word) {
    if (res) {
      res = res + ' ' + word
    } else {
      res = word
    }
  }
  return res
};
// @lc code=end

