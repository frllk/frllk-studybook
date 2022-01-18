/*
 * @lc app=leetcode.cn id=1670 lang=javascript
 *
 * [1670] 设计前中后队列
 */

// @lc code=start

/**
 * @description 初始化队列
 */
var FrontMiddleBackQueue = function() {
  this.leftArray = [];
  this.rightArray = [];
};

/** 
 * @description 将 val 添加到队列的 最前面 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  this.leftArray.unshift(val);
  if (this.leftArray.length > this.rightArray.length) {
    this.rightArray.unshift(this.leftArray.pop())
  }
};

/** 
 * @description 将 val 添加到队列的 正中间
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  if (this.leftArray.length == this.rightArray.length) {
    this.rightArray.unshift(val)
  } else {
    this.leftArray.push(val);
  }
};

/** 
 * @description 将 val 添加到队里的 最后面 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  this.rightArray.push(val)
  if (this.rightArray.length == this.leftArray.length + 2) {
    this.leftArray.push(this.rightArray.shift())
  }
};

/**
 * @description 将 最前面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  // 如果队列中无数据返回-1
  if (!this.rightArray.length) return -1;
  // 如果leftArray的长度为0，则返回rightArray的第一个元素
  if (!this.leftArray.length) return this.rightArray.shift()
  // 至少有2个元素
  let ret = this.leftArray.shift()
  if (this.leftArray.length + 1 < this.rightArray.length) {
    // 失衡了，需要调整，因为右边太长了，需要把右边吐出一个放到左侧
    this.leftArray.push(this.rightArray.shift())
  }
  return ret
};

/**
 * @description 将 正中间 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
  if (!this.rightArray.length) return -1;
  if (!this.leftArray.length) return this.rightArray.shift()
  if (this.rightArray.length == this.leftArray.length) return this.leftArray.pop()
  return this.rightArray.shift()
};

/**
 * @description 将 最后面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
  if (!this.rightArray.length) return -1;
  if (!this.leftArray.length) return this.rightArray.shift()
  let ret = this.rightArray.pop()
  if (this.rightArray.length < this.leftArray.length) {
    this.rightArray.unshift(this.leftArray.pop())
  }
  return ret
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
// @lc code=end

