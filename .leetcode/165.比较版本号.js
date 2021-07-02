/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let arr1 = version1.split('.')
  let arr2 = version2.split('.')
  while (arr1.length && arr2.length) {
    let num1 = Number(arr1.shift())
    let num2 = Number(arr2.shift())
    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }
  if (arr1.length > arr2.length) {
    return arr1.every(item => Number(item) === 0) ? 0 : 1
  } else if (arr1.length < arr2.length) {
    return arr2.every(item => Number(item) === 0) ? 0 : -1
  } else {
    return 0
  }
};
// @lc code=end

