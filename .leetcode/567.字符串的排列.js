/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false
  let map = new Map
  let n = s1.length
  for (let i = 0; i < n; i++) {
    if (map.has(s1[i])) {
      map.set(s1[i], map.get(s1[i]) + 1)
    } else {
      map.set(s1[i], 1)
    }
  }
  let left = 0
  let right = 0
  while (right < s2.length) {
    let str = s2[right]
    if (map.has(str)) {
      let strNum = map.get(str)
      if (strNum > 0) {
        map.set(str, strNum - 1)
        if (right - left + 1 === n) return true
      } else {
        while (left < right) {
          if (s2[left] === str) {
            left++
            break
          }
          if (map.has(s2[left])) {
            map.set(s2[left], map.get(s2[left]) + 1)
          }
          left++
        }
      }
    } else {
      while (left < right) {
        if (map.has(s2[left])) {
          map.set(s2[left], map.get(s2[left]) + 1)
        }
        left++
      }
      left++
    }
    right++
  }
  return false
};
// @lc code=end

