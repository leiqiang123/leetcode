/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  if (s.length < 4 || s.length > 12) return []
  let count = 4
  let res = []
  let dfs = (index, temp) => {
    if (temp.length === count) {
      if (index === s.length) {
        res.push(temp.join('.'))
      }
      return
    }
    if (index === s.length) return
    if (s[index] === '0') {
      dfs(index + 1, [...temp, '0'])
    } else {
      dfs(index + 1, [...temp, s[index]])
      if (s[index + 1]) {
        dfs(index + 2, [...temp, s[index] + s[index + 1]])
        if (s[index + 2] && (s[index] + s[index + 1] + s[index + 2] - 0 <= 255)) {
          dfs(index + 3, [...temp, s[index] + s[index + 1] + s[index + 2]])
        }
      }
    }
  }
  dfs(0, [])
  return res
};
// @lc code=end

