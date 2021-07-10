/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let n = nums.length
  if (n === 0) return []
  let res = []
  let pre = nums[0]
  for (let i = 1; i < n; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      if (pre === nums[i - 1]) {
        res.push(String(pre))
      } else {
        res.push(`${String(pre)}->${nums[i - 1]}`)
      }
      pre = nums[i]
    }
  }
  if (nums[n - 1] === pre) {
    res.push(String(pre))
  } else {
    res.push(`${String(pre)}->${nums[n - 1]}`)
  }
  return res
};
// @lc code=end

