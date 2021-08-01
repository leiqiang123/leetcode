/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let len1 = num1.length
  let len2 = num2.length
  let len = Math.max(len1, len2)
  let pos = 0
  let i = 0
  let res = ''
  while (i < len) {
    let curNum1 = Number(num1[len1 - i - 1] === undefined ? 0 : num1[len1 - i - 1])
    let curNum2 = Number(num2[len2 - i - 1] === undefined ? 0 : num2[len2 - i - 1])
    let curNum = curNum1 + curNum2 + pos
    if (curNum > 9) {
      res = curNum % 10 + res
      pos = 1
    } else {
      res = curNum + res
      pos = 0
    }
    i++
  }
  if (pos === 1) res = '1' + res
  return res
};
// @lc code=end

