/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let maxRight = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > maxRight) {
      return false
    } else {
      maxRight = Math.max(nums[i] + i, maxRight)
      if (maxRight >= nums.length - 1) return true
    }
  }
};
// @lc code=end

