/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:32
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-03 22:57:49
 * @FilePath: \frllk-studybook\算法\week2\682.棒球比赛.js
 */
/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let result = []
  for (num of ops) {
    switch (num) {
      case 'C': // 弹出上一轮得分
        result.pop()
        break;
      case 'D': // 上一轮得分的2倍
        result.push(result[result.length - 1] * 2)
        break;
      case '+': // 上两轮的得分
        result.push(result[result.length - 1] + result[result.length - 2])
        break;
      default:
        result.push(Number(num))
        break;
    }
  }
  return result.reduce((a, b) => a + b)
};
// @lc code=end

