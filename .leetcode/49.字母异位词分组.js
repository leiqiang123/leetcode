/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {}
  strs.forEach(item => {
    let str = item.split('').sort().join('')
    if (map[str]) {
      map[str].push(item)
    } else {
      map[str] = []
      map[str].push(item)
    }
  })
  let res = []
  for (const key in map) {
    res.push(map[key])
  }
  return res
};

// @lc code=end

