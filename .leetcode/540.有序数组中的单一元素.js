/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// [1,1,2,2,3,3,4,8,8]
var singleNonDuplicate = function(nums) {
  if (nums.length === 1) return nums[0]
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = Math.floor((right + left) / 2)
    if (nums[mid] === nums[mid - 1]) {
      if (mid % 2 === 0) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else if (nums[mid] === nums[mid + 1]) {
      if (mid % 2 === 0) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else {
      return nums[mid]
    }
  }
  return nums[left]
};
// @lc code=end

