/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''
  let result = strs[0]
  for (let i = 1; i < strs.length; i++) {
    result = twoStrCommonPrefix(result, strs[i])
    if (result === '') return result
  }
  return result
};
function twoStrCommonPrefix(str1, str2) {
  let j = 0
  for (; j < str1.length && j < str2.length; j++) {
    if (str1[j] !== str2[j]) {
      return str1.substring(0, j)
    }
  }
  return str1.substring(0, j)
}
// @lc code=end

