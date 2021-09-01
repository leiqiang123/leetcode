/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的 k-diff 数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  let set = new Set
  let map = new Map
  for (let num of nums) {
    if (set.has(num - k)) {
      map.set(num - k)
    }
    if (set.has(num + k)) {
      map.set(num)
    }
    set.add(num)
  }
  return map.size
};
// @lc code=end

