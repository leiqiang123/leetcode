/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var wiggleMaxLength = function(nums) {
  let n = nums.length
  if (n < 2) return n
  let up = 1
  let down = 1
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      up = Math.max(up, down + 1)
    } else if (nums[i] < nums[i - 1]) {
      down = Math.max(down, up + 1)
    }
  }
  return Math.max(up, down)
}

var wiggleMaxLengthByGreedy = function(nums) {
  let n = nums.length
  if (n < 2) return n
  let prevDiff = nums[1] - nums[0]
  let res = prevDiff !== 0 ? 2 : 1
  for (let i = 2; i < n; i++) {
    let diff = nums[i] - nums[i - 1]
    if ((diff > 0 && prevDiff <= 0) || (diff < 0 && prevDiff >= 0)) {
      res++
      prevDiff = diff
    }
  }
  return res
};
// @lc code=end

