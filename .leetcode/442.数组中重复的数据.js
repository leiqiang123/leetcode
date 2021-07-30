/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i])
    if (nums[num - 1] > 0) {
      nums[num - 1] = -nums[num - 1]
    } else {
      res.push(num)
    }
  }
  return res
};
// @lc code=end

