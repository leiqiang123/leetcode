/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let n = nums.length
  let res = new Array(n)
  res[0] = 1
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1]
  }
  let right = 1
  for (let i = n - 1; i >= 0; i--) {
    res[i] = res[i] * right
    right *= nums[i]
  }
  return res
};
// @lc code=end

