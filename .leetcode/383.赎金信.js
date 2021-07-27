/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let map = new Map
  for (let i = 0; i < magazine.length; i++) {
    if (map.has(magazine[i])) {
      map.set(magazine[i], map.get(magazine[i]) + 1)
    } else {
      map.set(magazine[i], 1)
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (map.has(ransomNote[i])) {
      let num = map.get(ransomNote[i])
      num--
      if (num === 0) {
        map.delete(ransomNote[i])
      } else {
        map.set(ransomNote[i], num)
      }
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

