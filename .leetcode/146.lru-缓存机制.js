/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
var LRUCache = function(capacity) {
  this.maxCapacity = capacity
  this.currentLength = 0
  this.capacityMap = new Map()
  this.stack = []
};
LRUCache.prototype.updateStack = function(key) {
  if (this.stack.includes(key)) {
    this.stack.splice(this.stack.indexOf(key), 1)
  }
  this.stack.push(key)
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.capacityMap.has(key)) {
    this.updateStack(key)
    return this.capacityMap.get(key)
  } else {
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.capacityMap.has(key)) {
    this.updateStack(key)
    this.capacityMap.set(key, value)
  } else {
    if (this.currentLength === this.maxCapacity) {
      let oldKey = this.stack.shift()
      this.stack.push(key)
      this.capacityMap.delete(oldKey)
      this.capacityMap.set(key, value)
    } else {
      this.currentLength++
      this.updateStack(key)
      this.capacityMap.set(key, value)
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

