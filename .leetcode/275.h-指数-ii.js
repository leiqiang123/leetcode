/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H 指数 II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let n = citations.length
  let left = 0
  let right = n - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    let h = n - mid
    if (h <= citations[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return n - left
};
// @lc code=end

