/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2)
};
// @lc code=end

