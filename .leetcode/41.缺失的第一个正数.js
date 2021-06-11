/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let arr = []
  nums.forEach(item => {
    if (item >= 1) {
      arr[item] = item
    }
  })
  if (arr.length === 0) return 1
  for (let i = 1; i < arr.length; i++) {
    if (!arr[i]) {
      return i
    }
  }
  return arr.length
};
// @lc code=end

