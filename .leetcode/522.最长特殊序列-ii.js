/*
 * @lc app=leetcode.cn id=522 lang=javascript
 *
 * [522] 最长特殊序列 II
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
  function isSubsequence(a = '', b = '') {
    let j = 0
    for (let i = 0; i < b.length && j < a.length; i++) {
      if (a[j] === b[i]) {
        j++
      }
    }
    return j === a.length
  }
  strs.sort((a, b) => b.length - a.length)
  for (let i = 0; i < strs.length; i++) {
    let flag = true
    for (let j = 0; j < strs.length; j++) {
      if (i === j) continue
      if (isSubsequence(strs[i], strs[j])) {
        flag = false
        break
      }
    }
    if (flag) return strs[i].length
  }
  return -1
};
// @lc code=end

