/*
 * @lc app=leetcode.cn id=565 lang=javascript
 *
 * [565] 数组嵌套
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== Number.MAX_SAFE_INTEGER) {
      let count = 0
      let start = nums[i]
      while (nums[start] !== Number.MAX_SAFE_INTEGER) {
        let temp = start
        start = nums[start]
        count++
        nums[temp] = Number.MAX_SAFE_INTEGER
      }
      res = Math.max(res, count)
    }
  }
  return res
};
// @lc code=end

