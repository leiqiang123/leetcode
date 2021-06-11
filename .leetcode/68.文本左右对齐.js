/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let res = []
  let str = words[0]
  for (let i = 1; i < words.length; i++) {
    if ((str + ' ' + words[i]).length > maxWidth) {
      let spaceNum = maxWidth - str.length
      let strs = str.split(' ')
      if (strs.length === 1) {
        while (spaceNum > 0) {
          str += ' '
          spaceNum--
        }
        res.push(str)
      } else {
        let strsLength = 0
        while (spaceNum > 0) {
          strs[strsLength] += ' '
          strsLength++
          spaceNum--
          if (strsLength === strs.length - 1) {
            strsLength = 0
          }
        }
        res.push(strs.join(' '))
      }
      str = words[i]
    } else {
      str = str + ' ' + words[i]
    }
  }
  if (str !== '') {
    let spaceNum = maxWidth - str.length
    while (spaceNum > 0) {
      str += ' '
      spaceNum--
    }
    res.push(str)
  }
  return res
};
// @lc code=end

