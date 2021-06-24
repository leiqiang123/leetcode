/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCutByMemory = function(s) {
  let n = s.length
  let f = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let isPalindrome = (i, j) => {
    if (f[i][j] !== 0) {
      return f[i][j]
    }
    if (i >= j) {
      f[i][j] = 1
    } else if (s[i] === s[j]) {
      f[i][j] = isPalindrome(i + 1, j - 1)
    } else {
      f[i][j] = -1
    }
    return f[i][j]
  }
  let dp = new Array(n).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (isPalindrome(j, i) === 1) {
        if (j === 0) {
          dp[i] = 0
        } else {
          dp[i] = Math.min(dp[i], dp[j - 1] + 1)
        }
      }
    }
  }
  return dp[n - 1]
};
var minCut = function(s) {
  let n = s.length
  let f = new Array(n).fill(0).map(() => new Array(n).fill(true))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      f[i][j] = (s[i] === s[j]) && f[i + 1][j - 1]
    }
  }
  let dp = new Array(n).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (f[j][i]) {
        if (j === 0) {
          dp[i] = 0
        } else {
          dp[i] = Math.min(dp[i], dp[j - 1] + 1)
        }
      }
    }
  }
  return dp[n - 1]
}
// @lc code=end

