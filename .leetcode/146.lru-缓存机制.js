/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
function ListNode(val, key, next, pre) {
  this.val = (val===undefined ? 0 : val)
  this.key = (key===undefined ? 0 : key)
  this.next = (next===undefined ? null : next)
  this.pre = (pre===undefined ? null : pre)
}
function DoubleListNode() {
  this.head = new ListNode()
  this.end = new ListNode()
  this.head.next = this.end
  this.end.pre = this.head
}
DoubleListNode.prototype.add = function(node) {
  node.next = this.head.next
  this.head.next.pre = node
  node.pre = this.head
  this.head.next = node
}
DoubleListNode.prototype.deleteEnd = function() {
  let deleteNode = this.end.pre
  deleteNode.pre.next = this.end
  this.end.pre = deleteNode.pre
  return deleteNode
}
DoubleListNode.prototype.updateLink = function(node) {
  node.pre.next = node.next
  node.next.pre = node.pre
  this.add(node)
}
var LRUCache = function(capacity) {
  this.maxCapacity = capacity
  this.currentLength = 0
  this.capacityMap = new Map()
  this.doubleListNode = new DoubleListNode()
};
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.capacityMap.has(key)) {
    let node = this.capacityMap.get(key)
    this.doubleListNode.updateLink(node)
    return node.val
  }
  return -1
};
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.capacityMap.has(key)) {
    let node = this.capacityMap.get(key)
    node.val = value
    this.doubleListNode.updateLink(node)
  } else {
    let node = new ListNode(value, key)
    this.doubleListNode.add(node)
    this.capacityMap.set(key, node)
    if (this.currentLength < this.maxCapacity) {
      this.currentLength++
    } else {
      this.capacityMap.delete(this.doubleListNode.deleteEnd().key)
    }
  }
};


/* 
也可利用 ES6 Map类型的特性 新加的属性会自动添加到keys的第一位 进行操作
*/

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

