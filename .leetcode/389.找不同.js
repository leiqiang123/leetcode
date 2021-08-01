/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let map = new Map
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      let num = map.get(t[i])
      num--
      if (num === 0) {
        map.delete(t[i])
      } else {
        map.set(t[i], num)
      }
    } else {
      return t[i]
    }
  }
};
// @lc code=end

