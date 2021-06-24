/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let res = []
  let temp = []
  let n = s.length
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let dfs = (i) => {
    if (i === n) {
      res.push(temp.slice())
      return
    }
    for (let j = i; j < n; j++) {
      if (isPalindrome(i, j) === 1) {
        temp.push(s.slice(i, j + 1))
        dfs(j + 1)
        temp.pop()
      }
    }
  }
  let isPalindrome = (i, j) => {
    if (dp[i][j] !== 0) {
      return dp[i][j]
    }
    if (i >= j) {
      dp[i][j] = 1
    } else if (s[i] === s[j]) {
      dp[i][j] = isPalindrome(i + 1, j - 1)
    } else {
      dp[i][j] = -1
    }
    return dp[i][j]
  }
  dfs(0)
  return res
};
// @lc code=end

