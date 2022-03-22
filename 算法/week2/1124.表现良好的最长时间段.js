/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:32
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-23 00:19:00
 * @FilePath: \frllk-studybook\算法\week2\1124.表现良好的最长时间段.js
 */
/*
 * @lc app=leetcode.cn id=1124 lang=javascript
 *
 * [1124] 表现良好的最长时间段
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  // 1.将大于8的认为是1 小于等于8的为-1， 然后求整个数组的前缀和
  // 下标【i, j】：表示天数  preSum[i], preSum[j]: 前缀和元素，表示是否是良好的时间段
  let preSum = new Array(hours.length + 1).fill(0) // 定义一个前缀和数组, 默认值设置为0
  // 求前缀和数组
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] > 8) preSum[i + 1] = preSum[i] + 1 
    else preSum[i + 1] = preSum[i] - 1
  }
  // 2.生成一个单调栈记录i的备选项
  let stack = [] // 定义一个栈记录下标数组
  stack.push(0)
  for (let i = 0; i < preSum.length; i++) {
    if (preSum[i] < preSum[stack[stack.length - 1]]) stack.push(i) // 找到了更小的, 记录下角标
  }
  let max = 0; // j - i
  for (let i = preSum.length - 1; i > max; i--) {
    while (stack.length && preSum[stack[stack.length - 1]] < preSum[i]) {
      max = Math.max(max, i - stack.pop())
    }
  }
  return max
};
// @lc code=end

