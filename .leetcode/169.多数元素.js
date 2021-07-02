/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 1
  let num = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === num) {
      count++
    } else {
      count--
      if (count === 0) {
        num = nums[i + 1]
        count++
        i++
      }
    }
  }
  return num
};
// @lc code=end

