/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = [[1]]
  for (let i = 1; i < numRows; i++) {
    let row = []
    row[0] = 1
    for (let j = 1; j < i + 1; j++) {
      let rightTop = res[i - 1][j] ? res[i - 1][j] : 0
      row[j] = res[i - 1][j - 1] + rightTop
    }
    res.push(row)
  }
  return res
};
// @lc code=end

