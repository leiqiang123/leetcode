/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  let left = 0
  let right = 0
  while (left < g.length && right < s.length) {
    if (s[right] >= g[left]) {
      left++
    }
    right++
  }
  return left
};
// @lc code=end

