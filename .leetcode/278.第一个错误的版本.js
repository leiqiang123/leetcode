/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1
        let right = n
        while (left < right) {
            let mid = left + Math.floor((right - left) / 2)
            if (isBadVersion(mid)) {
                if (mid - 1 <= 0 || !isBadVersion(mid - 1)) {
                    return mid
                } else {
                    right = mid - 1
                }
            } else {
                left = mid + 1
            }
        }
        return left
    };
};
// @lc code=end

