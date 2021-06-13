/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let res = false
  let m = board.length
  let n = board[0].length
  let end = word.length - 1
  let map = new Map()
  let dfs = (i, j, index) => {
    if (i >= m || i < 0 || j >= n || j < 0 || map.has(`${i}${j}`)) return
    if (board[i][j] === word[index]) {
      if (index === end) {
        res = true
        return
      }
      map.set(`${i}${j}`, 1)
      dfs(i + 1, j, index + 1)
      dfs(i - 1, j, index + 1)
      dfs(i, j + 1, index + 1)
      dfs(i, j - 1, index + 1)
      map.delete(`${i}${j}`)
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(i, j, 0)
    }
  }
  return res
};
// @lc code=end

