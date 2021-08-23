/*
 * @lc app=leetcode.cn id=525 lang=javascript
 *
 * [525] 连续数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  let map = new Map
  map.set(0, -1)
  let total = 0
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    total += nums[i] === 0 ? -1 : 1
    if (map.has(total)) {
      res = Math.max(res, i - map.get(total))
    } else {
      map.set(total, i)
    }
  }
  return res
};
// @lc code=end

