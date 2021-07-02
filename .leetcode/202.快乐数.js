/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let happyFunc = (num) => {
    let res = 0
    while (num > 0) {
      let temp = num % 10
      res += temp*temp
      num = (num - temp) / 10
    }
    return res
  }
  let map = new Map()
  while (n !== 1) {
    if (map.has(n)) {
      return false
    } else {
      map.set(n, 1)
      n = happyFunc(n)
    }
  }
  return true
};
// @lc code=end

