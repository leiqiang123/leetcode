/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  if (n < 3) return n
  let dp = [1, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp[i] = 0
    for (let j = 0; j < i; j++) {
      dp[i] = dp[i] + dp[j] * dp[i - j - 1]
    }
  }
  return dp[n]
};
// @lc code=end

