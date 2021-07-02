/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let res = 0
  let mutiple = 1
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    let cur = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1
    cur = cur * mutiple
    mutiple *= 26
    res += cur
  }
  return res
};
// @lc code=end

