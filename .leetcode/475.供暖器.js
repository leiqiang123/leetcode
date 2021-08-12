/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  houses.sort((a, b) => a - b)
  heaters.sort((a, b) => a - b)
  let n = heaters.length
  let res = 0
  let right = 0
  for (let i = 0; i < houses.length; i++) {
    while (houses[i] > heaters[right] && right < n) {
      right++
    }
    if (right === 0) {
      res = Math.max(res, heaters[0] - houses[i])
    } else if (right === n) {
      res = Math.max(res, houses[i] - heaters[n - 1])
    } else {
      res = Math.max(res, Math.min(heaters[right] - houses[i], houses[i] - heaters[right - 1]))
    }
  }
  return res
};
// @lc code=end

