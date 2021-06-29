/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let res = nums[0]
  let dpMax = nums[0]
  let dpMin = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let product1 = dpMax * nums[i]
    let product2 = dpMin * nums[i]
    dpMax = Math.max(nums[i], product1, product2)
    dpMin = Math.min(nums[i], product1, product2)
    res = Math.max(dpMax, res)
  }
  return res
};
// @lc code=end

