/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if(!nums.length) return [-1,-1];
  let left = 0;
  let right = nums.length -1;
  let start = 0;
  let end = 0;
  while(left <= right) {
      let mid = left + (right - left) / 2 | 0;
      if(nums[mid] === target) {
          start = mid;
          end = mid;
          while(start > left && nums[start] === nums[start-1]) start--;
          while(end < right && nums[end] === nums[end+1]) end++;
          return [start,end];
      } else if(nums[mid] > target){
          right = mid -1;
      } else {
          left = mid + 1;
      }
  }
  return [-1,-1];
};
// @lc code=end

