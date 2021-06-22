/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let dp = [[triangle[0][0]]]
  dp[1] = [...dp[0]]
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j <= i; j++) {
      let preDpNum = 0
      if (j === 0) {
        preDpNum = dp[0][j]
      } else if (j > 0 && j < i) {
        preDpNum = Math.min(dp[0][j - 1], dp[0][j])
      } else {
        preDpNum = dp[0][j - 1]
      }
      dp[1][j] = triangle[i][j] + preDpNum
    }
    dp[0] = [...dp[1]]
  }
  return Math.min(...dp[1])
};
// @lc code=end

