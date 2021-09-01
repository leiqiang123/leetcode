/*
 * @lc app=leetcode.cn id=556 lang=javascript
 *
 * [556] 下一个更大元素 III
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 var nextGreaterElement = function(n) {
  let str = Array.from(n.toString())
  let len = str.length
  for (let i = len-1; i > 0; i--) {
    if (str[i] > str[i-1]) {
      for (let j = len - 1; j >= i; j--) {
        if (str[j] > str[i - 1]) {
          let temp = str[i - 1]
          str[i - 1] = str[j]
          str[j] = temp
          break
        }
      }
      let substr = str.slice(i)
      let arr = Array.from(substr)
      arr.sort((a, b) => a - b)
      let res = str.slice(0, i).toString().replaceAll(',', '') + arr.toString().replaceAll(',', '')
      return res >= Math.pow(2, 31) ? -1 : res
    }
  }
  return -1
};
// @lc code=end

