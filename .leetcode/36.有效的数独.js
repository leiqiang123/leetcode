/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
/*
board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

33 63 93 36 66 96 39 69 99
*/
var isValidSudoku = function(board) {
  let map = new Map()
  for (let i = 0; i < board.length; i++) {
    map.set(`row${i}`, new Map())
    let rowMap = map.get(`row${i}`)
    for (let j = 0; j < board[i].length; j++) {
      let colMap
      if (!map.has(`col${j}`)) {
        map.set(`col${j}`, new Map())
      }
      colMap = map.get(`col${j}`)
      let blockMap
      let blockIndex = generateBlockIndex(i, j)
      if (!map.has(`${blockIndex}`)) {
        map.set(`${blockIndex}`, new Map())
      }
      blockMap = map.get(`${blockIndex}`)
      if (board[i][j] !== '.') {
        if (rowMap.has(board[i][j])) {
          return false
        } else {
          rowMap.set(board[i][j], true)
        }
        if (colMap.has(board[i][j])) {
          return false
        } else {
          colMap.set(board[i][j], true)
        }
        if (blockMap.has(board[i][j])) {
          return false
        } else {
          blockMap.set(board[i][j], true)
        }
      }
    }
  }
  return true
};
function generateBlockIndex(i, j) {
  if (i < 3) {
    if (j < 3) {
      return 1
    } else if (j >= 3 && j < 6) {
      return 2
    } else {
      return 3
    }
  } else if (i >= 3 && i < 6) {
    if (j < 3) {
      return 4
    } else if (j >= 3 && j < 6) {
      return 5
    } else {
      return 6
    }
  } else {
    if (j < 3) {
      return 7
    } else if (j >= 3 && j < 6) {
      return 8
    } else {
      return 9
    }
  }
}
// @lc code=end

