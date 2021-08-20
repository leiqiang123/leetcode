/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let oneRow = 'qwertyuiop'
  let twoRow = 'asdfghjkl'
  let threeRow = 'zxcvbnm'
  function checkStr(word) {
    let checkRow
    if (oneRow.indexOf(word[0]) !== -1) {
      checkRow = oneRow
    } else if (twoRow.indexOf(word[0]) !== -1) {
      checkRow = twoRow
    } else {
      checkRow = threeRow
    }
    let res = true
    for (let i = 1; i < word.length; i++) {
      if (checkRow.indexOf(word[i]) === -1) {
        res = false
      }
    }
    return res
  }
  let res = []
  for (let i = 0; i < words.length; i++) {
    if (checkStr(words[i].toLocaleLowerCase())) {
      res.push(words[i])
    }
  }
  return res
};
// @lc code=end

