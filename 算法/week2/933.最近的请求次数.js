/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function () {
  // 请求池
  this.pingArray = []
};

/** 
 * @param {number} t 请求t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  // 将t添加到请求池中
  this.pingArray.push(t)
  while (this.pingArray[0] < t - 3000) {
    this.pingArray.shift()
  }
  return this.pingArray.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

