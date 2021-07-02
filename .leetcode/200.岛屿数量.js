/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let m = grid.length
  let n = grid[0].length
  let res = 0
  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
      return
    }
    grid[i][j] = '0'
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j)
        res++
      }
    }
  }
  return res
};
// @lc code=end

