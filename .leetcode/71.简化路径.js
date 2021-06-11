/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  path = path.replace(/\/{2,}/g, '/')
  let paths = path.split('/')
  let stack = []
  for (let i = 0; i < paths.length; i++) {
    if (paths[i] === '') {
      continue
    }
    if (paths[i] === '..') {
      if (stack.length === 0) {
        continue
      } else {
        stack.pop()
      }
    } else if (paths[i] === '.') {
      continue
    } else {
      stack.push(paths[i])
    }
  }
  return '/' + stack.join('/')
};
// @lc code=end

