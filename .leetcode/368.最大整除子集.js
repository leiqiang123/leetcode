/*
 * @lc app=leetcode.cn id=368 lang=javascript
 *
 * [368] 最大整除子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  nums.sort((a, b) => a - b)
  let n = nums.length
  let dp = new Array(n).fill(1)
  let maxValue = 1
  let maxSize = 1
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    if (dp[i] > maxSize) {
      maxSize = dp[i]
      maxValue = nums[i]
    }
  }
  if (maxSize === 1) return [nums[0]]
  let res = []
  for (let i = n - 1; i >= 0 && maxSize > 0; i--) {
    if (dp[i] === maxSize && maxValue % nums[i] === 0) {
      res.push(nums[i])
      maxValue = nums[i]
      maxSize--
    }
  }
  return res
};
// @lc code=end

