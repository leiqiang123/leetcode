/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  let dp = new Array(m)
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n)
  }
  // 设置边界矩阵需要步数
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      for (let j = i; j < m; j++) {
        dp[j][0] = 0
      }
      break
    } else {
      dp[i][0] = 1
    }
  }
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      for (let j = i; j < n; j++) {
        dp[0][j] = 0
      }
      break
    } else {
      dp[0][i] = 1
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[m - 1][n - 1]
};
var uniquePathsWithObstacles = function(obstacleGrid) {
  var n = obstacleGrid.length;
  var m = obstacleGrid[0].length;
  var result = Array(m).fill(0);
  for(var i = 0;i < n;i++){
      for(var j = 0;j < m;j++){
          if(i == 0 && j == 0){
              result[j] = 1;
          }
          if(obstacleGrid[i][j] == 1){
              result[j] = 0;
          }else if(j > 0){
              result[j] += result[j-1];
          }
      }
  }
  return result[m-1];
};
// @lc code=end

