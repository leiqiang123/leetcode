/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.split(' ').join('')
  let stack = []
  let res = 0
  let currNum = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      if (currNum !== '') {
        stack.push(currNum)
        currNum = ''
      }
      let newStack = []
      let curr = stack.pop()
      while (curr !== '(') {
        newStack.unshift(curr)
        curr = stack.pop()
      }
      let curRes = 0
      let operate = 'add'
      for (let j = 0; j < newStack.length; j++) {
        if (newStack[j] === '+') {
          operate = 'add'
        } else if (newStack[j] === '-') {
          operate = 'reduce'
        } else {
          if (operate === 'add') {
            curRes += Number(newStack[j])
          } else {
            curRes -= Number(newStack[j])
          }
        }
      }
      stack.push(curRes)
    } else {
      if (s[i] === '+' || s[i] === '-' || s[i] === '(') {
        stack.push(currNum)
        currNum = ''
        stack.push(s[i])
      } else {
        currNum += s[i]
      }
    }
  }
  if (currNum !== '') {
    stack.push(currNum)
  }
  let operate = 'add'
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === '+') {
      operate = 'add'
    } else if (stack[i] === '-') {
      operate = 'reduce'
    } else {
      if (operate === 'add') {
        res += Number(stack[i])
      } else {
        res -= Number(stack[i])
      }
    }
  }
  return res
};
// @lc code=end

