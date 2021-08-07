/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let map = new Map
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
  }
  let arr = []
  for (const [key, num] of map.entries()) {
    arr.push({key, num})
  }
  arr.sort((a, b) => b.num - a.num)
  let res = ''
  arr.forEach(item => {
    let num = item.num
    let str = ''
    while (num > 0) {
      str += item.key
      num--
    }
    res += str
  })
  return res
};
// @lc code=end

