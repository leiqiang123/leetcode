/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums[0] > target) {
    return 0
  }
  if (nums[nums.length - 1] < target) {
    return nums.length
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i
    }
    if (nums[i] < target && nums[i + 1] > target) {
      return i + 1
    }
  }
};
// @lc code=end

