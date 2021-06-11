/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows <= 1) return s
  // 生成二维数组
  let array = []
  for (let index = 0; index < numRows; index++) {
    array.push([])
  }
  let flag = -1
  let row = 0
  for (let i = 0; i < s.length; i++) {
    array[row].push(s[i])
    if (row === 0 || row === numRows - 1) flag = -flag
    row += flag
  }
  return array.flat().join('')
};
// @lc code=end

