/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let map = new Map
  let stack = []
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length !== 0 && stack[stack.length - 1] < nums2[i]) {
      let curr = stack.pop()
      map.set(curr, nums2[i])
    }
    stack.push(nums2[i])
  }
  let res = []
  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      res.push(map.get(nums1[i]))
    } else {
      res.push(-1)
    }
  }
  return res
};
// @lc code=end

