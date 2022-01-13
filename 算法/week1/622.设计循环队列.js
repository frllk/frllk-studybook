/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * @description 构造器，设置队列长度为 k
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = Array(k + 1);
  this.front = 0; // 头指针
  this.rear = 0; // 尾指针
  this.max = k; // 最大容量
};

/** 
 * @description 向循环队列插入一个元素。如果成功插入则返回真
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  // 如果满了就不添加了
  if (this.isFull()) return false;
  this.queue[this.rear] = value;
  this.rear = (this.rear + 1) % (this.max + 1);
  return true;
};

/**
 * @description 从循环队列中删除一个元素。如果成功删除则返回真
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false;
  this.front = (this.front + 1) % (this.max + 1);
  return true;
};

/**
 * @description 从队首获取元素。如果队列为空，返回 -1 
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) return -1;
  return this.queue[this.front];
};

/**
 * @description 获取队尾元素。如果队列为空，返回 -1
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) return -1;
  return this.queue[(this.rear + this.max) % (this.max + 1)];
};

/**
 * @description 检查循环队列是否为空
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return ((this.rear - this.front + this.max + 1) % (this.max + 1)) == 0
};

/**
 * @description 检查循环队列是否已满
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return ((this.rear - this.front + this.max + 1) % (this.max + 1)) == this.max
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end