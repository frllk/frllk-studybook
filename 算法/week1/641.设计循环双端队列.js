/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-01-12 23:32:50
 * @LastEditors: frllk
 * @LastEditTime: 2022-01-13 23:52:01
 * @FilePath: \frllk-studybook\算法\week1\641.设计循环双端队列.js
 */
/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * @description 构造函数,双端队列的大小为k
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.queue = Array(k + 1);
  this.front = 0; // 头指针
  this.rear = 0; // 尾指针
  this.max = k; // 最大容量
};

/** 
 * @description 将一个元素添加到双端队列头部。 如果操作成功返回 true
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.isFull()) return false;
  this.front = (this.front + this.max) % (this.max + 1);
  this.queue[this.front] = value;
  return true;
};

/** 
 * @description 将一个元素添加到双端队列尾部。如果操作成功返回 true
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.isFull()) return false;
  this.queue[this.rear] = value;
  this.rear = (this.rear + 1) % (this.max + 1);
  return true;
};

/**
 * @description 从双端队列头部删除一个元素。 如果操作成功返回 true
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if (this.isEmpty()) return false;
  this.front = (this.front + 1) % (this.max + 1); // 往后走一步，+1
  return true;
};

/**
 * @description 从双端队列尾部删除一个元素。如果操作成功返回 true
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (this.isEmpty()) return false;
  this.rear = (this.rear + this.max) % (this.max + 1); // 往前移一位，+max
  return true;
};

/**
 * @description 从双端队列头部获得一个元素。如果双端队列为空，返回 -1
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if (this.isEmpty()) return -1;
  return this.queue[this.front];
};

/**
 * @description 获得双端队列的最后一个元素。 如果双端队列为空，返回 -1
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if (this.isEmpty()) return -1;
  return this.queue[(this.rear + this.max) % (this.max + 1)];
};

/**
 * @description 检查双端队列是否为空
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return ((this.rear - this.front + this.max + 1) % (this.max + 1)) == 0
};

/**
 * @description 检查双端队列是否满了
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return ((this.rear - this.front + this.max + 1) % (this.max + 1)) == this.max
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

