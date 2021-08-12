/*
 * @lc app=leetcode.cn id=470 lang=javascript
 *
 * [470] 用 Rand7() 实现 Rand10()
 */

// @lc code=start
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
    let row, col, index
    do {
      row = rand7()
      col = rand7()
      index = col + (row - 1) * 7
    } while (index > 40)
    return 1 + (index - 1) % 10
};
// @lc code=end

