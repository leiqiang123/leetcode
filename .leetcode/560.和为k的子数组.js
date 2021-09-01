/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let map = new Map
  map.set(0, 1)
  let n = nums.length
  let total = 0
  let res = 0
  for (let i = 0; i < n; i++) {
    total += nums[i]
    if (map.has(total - k)) {
      res += map.get(total - k)
    }
    if (map.has(total)) {
      map.set(total, map.get(total) + 1)
    } else {
      map.set(total, 1)
    }
  }
  return res
};
// @lc code=end

