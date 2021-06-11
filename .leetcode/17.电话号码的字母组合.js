/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits === '') return []
  let map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  let digitList = digits.split('')
  let result = ['']
  digitList.forEach(digit => {
    let length = result.length
    for (let i = 0; i < length; i++) {
      let temp = result.shift()
      map[digit].forEach(item => {
        result.push(temp + item)
      })
    }
  })
  return result
};
// @lc code=end

