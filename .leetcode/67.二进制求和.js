/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let res = ''
  let curry = 0
  let aEnd = a.length - 1
  let bEnd = b.length - 1
  while (a[aEnd] || b[bEnd]) {
    if (a[aEnd] && b[bEnd]) {
      if (Number(a[aEnd]) + Number(b[bEnd]) + curry > 1) {
        if (Number(a[aEnd]) + Number(b[bEnd]) + curry > 2) {
          res = '1' + res
        } else {
          res = '0' + res
        }
        curry = 1
      } else {
        res = Number(a[aEnd]) + Number(b[bEnd]) + curry + res
        curry = 0
      }
    } else if (a[aEnd]) {
      if (Number(a[aEnd]) + curry > 1) {
        res = '0' + res
        curry = 1
      } else {
        res = Number(a[aEnd]) + curry + res
        curry = 0
      }
    } else if (b[bEnd]) {
      if (Number(b[bEnd]) + curry > 1) {
        res = '0' + res
        curry = 1
      } else {
        res = Number(b[bEnd]) + curry + res
        curry = 0
      }
    }
    aEnd--
    bEnd--
  }
  if (curry === 1) res = '1' + res
  return res
};
// @lc code=end

