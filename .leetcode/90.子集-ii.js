/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums = nums.sort((a, b) => a - b)
  let res = [[]]
  let dfs = (cur, k, temp) => {
    if (temp.length + nums.length - cur < k) {
      return
    }
    if (temp.length === k) {
      res.push(temp)
      return
    }
    dfs(cur + 1, k, [...temp, nums[cur]])
    while (nums[cur + 1] && nums[cur] === nums[cur + 1]) {
      cur++
    }
    dfs(cur + 1, k, temp)
  }
  for (let i = 1; i <= nums.length; i++) {
    dfs(0, i, [])
  }
  return res
};
// @lc code=end

