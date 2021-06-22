/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex < 1) return [1]
  let preLine = [1]
  for (let i = 1; i <= rowIndex; i++) {
    let row = []
    row[0] = 1
    for (let j = 1; j < i + 1; j++) {
      let rightTop = preLine[j] ? preLine[j] : 0
      row[j] = preLine[j - 1] + rightTop
    }
    preLine = row
  }
  return preLine
};
// @lc code=end

