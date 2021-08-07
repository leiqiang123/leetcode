/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let n = nums.length
  for (let i = 0; i < n; i++) {
    let cur = Math.abs(nums[i])
    if (cur === n) {
      cur = 0
    }
    if (nums[cur] > 0) {
      nums[cur] = -nums[cur]
    }
  }
  let res = []
  for (let i = 1; i < n; i++) {
    if (nums[i] > 0) {
      res.push(i)
    }
  }
  if (nums[0] > 0) {
    res.push(n)
  }
  return res
};
// @lc code=end

