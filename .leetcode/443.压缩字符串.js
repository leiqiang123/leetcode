/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let left = chars[0]
  let num = 1
  let index = 0
  for (let i = 1; i < chars.length; i++) {
    if (left === chars[i]) {
      num++
    } else {
      chars[index] = left
      index++
      if (num !== 1) {
        let numStr = String(num)
        for (let j = 0; j < numStr.length; j++) {
          chars[index] = numStr[j]
          index++
        }
        num = 1
      }
      left = chars[i]
    }
  }
  chars[index] = left
  index++
  if (num !== 1) {
    let numStr = String(num)
    for (let j = 0; j < numStr.length; j++) {
      chars[index] = numStr[j]
      index++
    }
    num = 1
  }
  return index
};
// @lc code=end

