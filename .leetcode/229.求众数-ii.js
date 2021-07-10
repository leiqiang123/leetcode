/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let res1 = {val: '', total: 0}
  let res2 = {val: '', total: 0}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === res1.val) {
      res1.total++
    } else if (nums[i] === res2.val) {
      res2.total++
    } else {
      if (res1.total === 0) {
        res1.val = nums[i]
        res1.total++
      } else if (res2.total === 0) {
        res2.val = nums[i]
        res2.total++
      } else {
        res1.total--
        if (res1.total === 0) res1.val = ''
        res2.total--
        if (res2.total === 0) res2.val = ''
      }
    }
  }
  let res = []
  let count1 = 0
  let count2 = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === res1.val) {
      count1++
    }
    if (nums[i] === res2.val) {
      count2++
    }
  }
  if (count1 > nums.length / 3) res.push(res1.val)
  if (count2 > nums.length / 3) res.push(res2.val)
  return res
};
// @lc code=end

