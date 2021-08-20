/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let n = nums.length
  let stack = []
  let res = new Array(n).fill(-1)
  for (let i = 0; i < n * 2 - 1; i++) {
    while (stack.length !== 0 && nums[i % n] > nums[stack[stack.length - 1]]) {
      let cur = stack.pop()
      res[cur % n] = i % n
    }
    stack.push(i % n)
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] !== -1) {
      res[i] = nums[res[i]]
    }
  }
  return res
};
// @lc code=end

