/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let i = 1
  let arr = []
  while (i <= n) {
    arr.push(i)
    i++
  }
  while (k > 1) {
    arr = nextPermutation(arr)
    k--
  }
  function nextPermutation(nums) {
    let length = nums.length
    if (length === 1) return nums
    let right = length - 1
    let left = 0
    while (right > 0) {
      if (nums[right] > nums[right - 1]) {
        left = right - 1
        break
      }
      right--
    }
    right = length - 1
    while (right > left) {
      if (nums[left] < nums[right]) {
        let temp = nums[right]
        nums[right] = nums[left]
        nums[left] = temp
        let sortList = nums.splice(left + 1).sort((a, b) => a - b)
        nums.splice(left + 1, 0, ...sortList)
        return nums
      }
      right--
    }
    return nums
  }
  return arr.join('')
};
// @lc code=end

