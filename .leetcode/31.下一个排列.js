/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead. 326541 341256
 */
var nextPermutation = function(nums) {
  let length = nums.length
  if (length === 1) return nums
  let right = length - 1
  let left = 0
  let flag = false
  while (right > 0) {
    if (nums[right] > nums[right - 1]) {
      left = right - 1
      flag = true
      break
    }
    right--
  }
  if (flag) {
    right = length - 1
    while (right > left) {
      if (nums[left] < nums[right]) {
        let temp = nums[right]
        nums[right] = nums[left]
        nums[left] = temp
        let sortList = nums.splice(left + 1).sort((a, b) => a - b)
        nums.splice(left + 1, 0, ...sortList)
        return nums
      }
      right--
    }
  }
  nums.sort((a, b) => a - b)
  return nums
};
// @lc code=end

