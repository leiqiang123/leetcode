/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = []
  complie(1, '(', result, 1, n)
  return result
};
/**
 * 
 * @param {*} n 括号层次
 * @param {*} str 生成的字符串
 * @param {*} res 最后返回的数组
 * @param {*} len 当前生成括号对数
 * @param {*} length 总生成括号对数
 */
function complie(n, str, result, len, length) {
  if (len === length) {
    while(n > 0) {
      str += ')'
      n--
    }
    result.push(str)
    return
  }
  if (n > 0) {
    complie(n + 1, str + '(', result, len + 1, length)
    complie(n - 1, str + ')', result, len, length)
  } else {
    complie(n + 1, str + '(', result, len + 1, length)
  }
}
// @lc code=end

