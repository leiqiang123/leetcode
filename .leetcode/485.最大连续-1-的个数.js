/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let res = 0
  let cur = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      cur++
    } else {
      res = Math.max(res, cur)
      cur = 0
    }
  }
  if (cur > 0) {
    res = Math.max(res, cur)
  }
  return res
};
// @lc code=end

