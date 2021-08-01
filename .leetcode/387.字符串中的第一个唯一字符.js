/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = new Map
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], 2)
    } else {
      map.set(s[i], 1)
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i
    }
  }
  return -1
};
// @lc code=end

