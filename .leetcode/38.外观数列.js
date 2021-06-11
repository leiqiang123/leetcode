/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return '1'
  return descStr('1', 2, n)
};
function descStr(str, current, n) {
  str = result(str)
  if (current === n) {
    return str
  } else {
    return descStr(str, current + 1, n)
  }
}
function result(str) {
  let num = 1
  let temp = str[0]
  let res = ''
  for (let i = 1; i < str.length; i++) {
    if (temp === str[i]) {
      num++
    } else {
      res += num + temp
      num = 1
      temp = str[i]
    }
  }
  return res += num + temp
}
// @lc code=end

