/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let strs = s.split(' ')
  if (strs.length !== pattern.length) return false
  let map = new Map
  let strMap = new Map
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      let target = map.get(pattern[i])
      if (strs[i] !== strs[target]) {
        return false
      }
    } else {
      map.set(pattern[i], i)
      if (strMap.has(strs[i])) {
        return false
      } else {
        strMap.set(strs[i], i)
      }
    }
  }
  return true
};
// @lc code=end

