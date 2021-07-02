/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length
  nums = nums.reverse()
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
  return nums
};
function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start += 1
    end -= 1
  }
}
// @lc code=end

