/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  let f1 = 0
  let f2 = 1
  let res
  for (let i = 2; i <= n; i++) {
    res = f1 + f2
    f1 = f2
    f2 = res
  }
  return res
};
// @lc code=end

