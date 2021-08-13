/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let temp = num
  let c = 0
  while (temp > 0) {
    c = (c << 1) + 1
    temp >>= 1
  }
  return num ^ c
};
// @lc code=end

