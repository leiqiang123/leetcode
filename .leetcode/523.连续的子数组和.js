/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  let n = nums.length
  if (n < 2) return false
  let map = new Map
  map.set(0, -1)
  let preTotal = 0
  for (let i = 0; i < nums.length; i++) {
    preTotal = (preTotal + nums[i]) % k
    if (map.has(preTotal)) {
      if (i - map.get(preTotal) >= 2) return true
    } else {
      map.set(preTotal, i)
    }
  }
  return false
};
// @lc code=end

