/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let map = new Map
  nums1.forEach(item => {
    if (!map.has(item)) {
      map.set(item, true)
    }
  })
  let map2 = new Map
  let res = []
  nums2.forEach(item => {
    if (map.has(item) && !map2.has(item)) {
      res.push(item)
      map2.set(item, true)
    }
  })
  return res
};
// @lc code=end

