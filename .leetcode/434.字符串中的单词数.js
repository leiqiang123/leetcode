/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  return s.match(/[^ ]+/g) ? s.match(/[^ ]+/g).length : 0
};
// @lc code=end

