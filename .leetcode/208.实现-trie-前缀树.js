/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.tree = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let tree = this.tree
  for (let i = 0; i < word.length; i++) {
    if (!tree[word[i]]) {
      tree[word[i]] = {}
    }
    tree = tree[word[i]]
  }
  tree.val = 1
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let tree = this.tree
  for (let i = 0; i < word.length; i++) {
    if (tree[word[i]]) {
      tree = tree[word[i]]
    } else {
      return false
    }
  }
  return tree.val === 1 ? true : false
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let tree = this.tree
  for (let i = 0; i < prefix.length; i++) {
    if (tree[prefix[i]]) {
      tree = tree[prefix[i]]
    } else {
      return false
    }
  }
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

