/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let n = gas.length
  let rest = 0
  let surplus = 0
  let start = 0
  for (let i = 0; i < n; i++) {
    surplus = surplus + gas[i] - cost[i]
    if (surplus < 0) {
      rest += surplus
      surplus = 0
      start = i + 1
    }
  }
  if (start === n || surplus + rest < 0) return -1
  return start
};
// @lc code=end

