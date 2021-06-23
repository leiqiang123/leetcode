/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let res = 0
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], true)
  }
  for (let item of nums) {
    if (!map.has(item - 1)) {
      let length = 0
      while (map.has(item)) {
        length++
        item++
      }
      res = Math.max(res, length)
    }
  }
  return res
};
// @lc code=end

