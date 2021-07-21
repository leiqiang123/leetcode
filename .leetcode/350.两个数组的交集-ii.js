/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let map = new Map
  nums1.forEach(item => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  })
  let res = []
  nums2.forEach(item => {
    if (map.has(item)) {
      res.push(item)
      let numMap = map.get(item)
      if (numMap === 1) {
        map.delete(item)
      } else {
        map.set(item, numMap - 1)
      }
    }
  })
  return res
};
// @lc code=end

