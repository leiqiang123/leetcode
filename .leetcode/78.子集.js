/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = [[]]
  let dfs = (cur, nums, k, temp) => {
    if (temp.length + nums.length - cur < k) {
      return
    }
    if (temp.length === k) {
      res.push(temp)
      return
    }
    dfs(cur + 1, nums, k, [...temp, nums[cur]])
    dfs(cur + 1, nums, k, temp)
  }
  for (let i = 1; i <= nums.length; i++) {
    dfs(0, nums, i, [])
  }
  return res
};
// @lc code=end

