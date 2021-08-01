/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let oneNum = 'a'
  let twoNum = 'a'
  let threeNum = 'a'
  for (let i = 0; i < nums.length; i++) {
    if ([oneNum, twoNum, threeNum].includes(nums[i])) continue
    if (oneNum === 'a') {
      oneNum = nums[i]
      continue
    }
    if (twoNum === 'a') {
      if (nums[i] > oneNum) {
        twoNum = oneNum
        oneNum = nums[i]
      } else {
        twoNum = nums[i]
      }
      continue
    }
    if (threeNum === 'a') {
      if (nums[i] > oneNum) {
        threeNum = twoNum
        twoNum = oneNum
        oneNum = nums[i]
      } else if (nums[i] > twoNum) {
        threeNum = twoNum
        twoNum = nums[i]
      } else {
        threeNum = nums[i]
      }
      continue
    }
    if (threeNum < nums[i]) {
      if (nums[i] < twoNum) {
        threeNum = nums[i]
      } else if (nums[i] < oneNum) {
        threeNum = twoNum
        twoNum = nums[i]
      } else {
        threeNum = twoNum
        twoNum = oneNum
        oneNum = nums[i]
      }
    }
  }
  if (oneNum === 'a' || twoNum === 'a' || threeNum === 'a') {
    return oneNum
  } else {
    return threeNum
  }
};
// @lc code=end

