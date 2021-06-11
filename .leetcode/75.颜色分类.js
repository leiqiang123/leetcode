/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let left = 0
  let right = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      changePosition(right, i, nums)
      right++
    } else if (nums[i] === 0) {
      changePosition(left, i, nums)
      if (left < right) {
        changePosition(right, i, nums)
      }
      left++
      right++
    }
  }
};
function changePosition(left, right, nums) {
  let temp = nums[left]
  nums[left] = nums[right]
  nums[right] = temp
}
// @lc code=end

