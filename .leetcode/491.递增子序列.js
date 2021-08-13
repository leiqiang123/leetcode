/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let res = []
  let n = nums.length
  function dfs(start, path = []) {
    if (start === n) {
      if (path.length >= 2) {
        res.push([...path])
      }
      return
    }
    path.push(nums[start])
    for (let i = start + 1; i <= n; i++) {
      let prev = nums[start]
      let curr = nums[i]
      if (i < n && curr === prev) {
        dfs(i, path)
        break
      } else if (i == n || prev < curr) {
        dfs(i, path)
      }
    }
    path.pop()
  }
  for (let i = 0; i < n; i++) {
    dfs(i, [])
  }
  return res
};

// @lc code=end

