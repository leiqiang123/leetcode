/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  for (let i = Math.floor(Math.sqrt(area)); i > 0; i--) {
    let j = area / i
    if (j % 1 === 0 && j >= i) {
      return [j, i]
    }
  }
  return []
};
// @lc code=end

