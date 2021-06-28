/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  let res = 1
  for (let i = 0; i < points.length; i++) {
    let point = points[i]
    let map = new Map()
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        let diagonalRatio
        if (point[1] === points[j][1]) {
          diagonalRatio = '0'
        } else {
          diagonalRatio = (point[0] - points[j][0]) / (point[1] - points[j][1])
        }
        if (map.has(diagonalRatio)) {
          map.set(diagonalRatio, map.get(diagonalRatio) + 1)
        } else {
          map.set(diagonalRatio, 2)
        }
        res = Math.max(res, map.get(diagonalRatio))
      }
    }
  }
  return res
};
// @lc code=end
