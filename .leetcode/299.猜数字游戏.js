/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let A = 0
  let B = 0
  let sameMap = new Map
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      A++
      sameMap.set(i, true)
    }
  }
  let notSameMap = new Map
  for (let i = 0; i < secret.length; i++) {
    if (!sameMap.has(i)) {
      if (notSameMap.has(secret[i])) {
        notSameMap.set(secret[i], notSameMap.get(secret[i]) + 1)
      } else {
        notSameMap.set(secret[i], 1)
      }
    }
  }
  let guessMap = new Map
  for (let i = 0; i < guess.length; i++) {
    if (!sameMap.has(i) && notSameMap.has(guess[i]) && notSameMap.get(guess[i]) !== 0) {
      B++
      notSameMap.set(guess[i], notSameMap.get(guess[i]) - 1)
    }
  }
  return A + 'A' + B + 'B'
};
// @lc code=end

