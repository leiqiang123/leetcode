/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num === 1) return false
  let ans = 1
  for (let i = 2; i < Math.pow(num, 0.5); i++) {
    if (i > num / i) break
    if (num % i === 0) {
      ans += i + num / i
    }
  }
  return ans === num
};
// @lc code=end

