/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function quickSort (array) {
  if (array.length <= 1) return array
  let baseIndex = Math.floor(array.length / 2)
  let baseItem = array.splice(baseIndex, 1)[0]
  let leftArray = []
  let rightArray = []
  array.forEach(item => {
    if (item > baseItem) {
      rightArray.push(item)
    } else {
      leftArray.push(item)
    }
  })
  return quickSort(leftArray).concat([baseItem], quickSort(rightArray))
}

var findMedianSortedArrays = function(nums1 = [], nums2 = []) {
  let newArray = quickSort(nums1.concat(nums2))
  if (newArray.length % 2 === 0) {
    let middle = Math.floor(newArray.length / 2)
    return (newArray[middle] + newArray[middle - 1]) / 2
  } else {
    return newArray[Math.floor(newArray.length / 2)]
  }
};
// @lc code=end

