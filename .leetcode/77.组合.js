/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = []
  let dfs = (cur, n, k, temp) => {
    if (temp.length + (n - cur + 1) < k) {
      return
    }
    if (temp.length === k) {
      res.push(temp)
      return
    }
    dfs(cur + 1, n, k, [...temp, cur])
    dfs(cur + 1, n, k, temp)
  }
  dfs(1, n, k, [])
  return res
};
// @lc code=end

