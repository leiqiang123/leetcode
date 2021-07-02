/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  let m = dungeon.length
  let n = dungeon[0].length
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(Infinity))
  dp[m][n - 1] = dp[m - 1][n] = 1
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let min = Math.min(dp[i][j + 1], dp[i + 1][j])
      dp[i][j] = Math.max(min - dungeon[i][j], 1)
    }
  }
  return dp[0][0]
};
// @lc code=end

