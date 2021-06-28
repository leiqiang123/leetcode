/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = []
  for (let i = 0; i < tokens.length; i++) {
    let cur = tokens[i]
    if (cur === '+') {
      stack.push(stack.pop() + stack.pop())
    } else if (cur === '-') { 
      let left = stack.pop()
      let right = stack.pop()
      stack.push(right - left)
    } else if (cur === '*') {
      stack.push(stack.pop() * stack.pop())
    } else if (cur === '/') {
      let left = stack.pop()
      let right = stack.pop()
      stack.push(Number(String(right / left).split('.')[0]))
    } else {
      stack.push(Number(cur))
    }
  }
  return stack[0]
};
// @lc code=end

