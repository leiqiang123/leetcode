/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let low = 0
  let high = nums.length - 1
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2)
    if (nums[mid] === nums[high]) {
      high--
    } else {
      if (nums[mid] < nums[high]) {
        high = mid
      } else {
        low = mid + 1
      }
    }
  }
  return nums[low]
};
// @lc code=end

