/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:49
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-29 23:22:58
 * @FilePath: \frllk-studybook\算法\week5\264.丑数-ii.js
 */
/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 注意这个里面的去重，与 面试题 17.09. 第 k 个数 一样
 */
var nthUglyNumber = function(n) {
  var dp = new Array() // 定义一个数组，存丑数
  dp[0] = 1
  var p2 = 0; // 素因子2使用的次数
  var p3 = 0; // 素因子3使用的次数
  var p5 = 0; // 素因子5使用的次数
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[p2] * 2, Math.min(dp[p3] * 3, dp[p5] * 5))
    // 去重
    if (dp[i] === dp[p2] * 2) p2++
    if (dp[i] === dp[p3] * 3) p3++
    if (dp[i] === dp[p5] * 5) p5++
  }
  return dp[n - 1]
};
// @lc code=end

