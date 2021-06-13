/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 2) return nums.length
  let low = 2
  let fast = 2
  while (fast < nums.length) {
    if (nums[low - 2] !== nums[fast]) {
      nums[low] = nums[fast]
      low++
    }
    fast++
  }
  return low
};
// @lc code=end

