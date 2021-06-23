/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  let m = board.length
  let n = board[0].length
  let dfs = (i, j) => {
    if (i >= 0 && i < m && j >= 0 && j < n && board[i][j] === 'O') {
      board[i][j] = '-'
      dfs(i - 1, j)
      dfs(i + 1, j)
      dfs(i, j - 1)
      dfs(i, j + 1)
    }
  }
  for (let i = 0; i < m; i++) {
    dfs(i, 0)
    dfs(i, n - 1)
  }
  for (let i = 0; i < n; i++) {
    dfs(0, i)
    dfs(m - 1, i)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      } else if (board[i][j] === '-') {
        board[i][j] = 'O'
      }
    }
  }
  return board
};
// @lc code=end

