/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let z = x ^ y, res = 0
  while (z !== 0) {
    z &= z - 1
    res++
  }
  return res
};
// @lc code=end

