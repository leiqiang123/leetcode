/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
  function isSubsequence(str) {
    if (str.length > s.length) return false
    let j = 0
    for (let i = 0; i < s.length && j < str.length; i++) {
      if (s[i] === str[j]) {
        j++
      }
    }
    return j === str.length
  }
  let res = ''
  for (let i = 0; i < dictionary.length; i++) {
    let currStr = dictionary[i]
    if (isSubsequence(currStr)) {
      if (currStr.length === res.length) {
        if (currStr < res) {
          res = currStr
        }
      } else if (currStr.length > res.length) {
        res = currStr
      }
    }
  }
  return res
};
// @lc code=end

