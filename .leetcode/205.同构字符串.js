/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let map1 = new Map()
  let map2 = new Map()
  for (let i = 0; i < s.length; i++) {
    let has1 = map1.has(s[i])
    let has2 = map2.has(t[i])
    if (has1 && has2) {
      let get1 = map1.get(s[i])
      let get2 = map2.get(t[i])
      if (get1 !== get2) {
        return false
      }
    } else if (!has1 && !has2) {
      map1.set(s[i], i)
      map2.set(t[i], i)
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

