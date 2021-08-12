/*
 * @lc app=leetcode.cn id=462 lang=javascript
 *
 * [462] 最少移动次数使数组元素相等 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b)
  let n = nums.length
  let midNum = nums[Math.ceil(n / 2) - 1]
  return nums.reduce((total, item) => {
    return Math.abs(item - midNum) + total
  }, 0)
};
// @lc code=end

