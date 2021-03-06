/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMinByBinarySearch = function(nums) {
  let low = 0
  let high = nums.length - 1
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2)
    if (nums[mid] < nums[high]) {
      high = mid
    } else {
      low = mid + 1
    }
  }
  return nums[low]
};
var findMin = function(nums) {
  return nums.sort((a, b) => a - b)[0]
}
// @lc code=end

