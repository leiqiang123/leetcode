/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  let length = isConnected.length
  let map = new Map
  let res = 0
  let dfs = (i) => {
    for (let j = 0; j < length; j++) {
      if (isConnected[i][j] === 1 && !map.has(j)) {
        map.set(j, true)
        dfs(j)
      }
    }
  }
  for (let i = 0; i < length; i++) {
    if (!map.has(i)) {
      dfs(i)
      res++
    }
  }
  return res
};
// @lc code=end

