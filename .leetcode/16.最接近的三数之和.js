/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b)
  let result = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum
      }
      if (sum > target) {
        right--
      } else if (sum < target) {
        left++
      } else {
        return result
      }
    }
  }
  return result
};
// @lc code=end

