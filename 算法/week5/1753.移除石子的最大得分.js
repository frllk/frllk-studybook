/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:50
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-31 23:32:18
 * @FilePath: \frllk-studybook\算法\week5\1753.移除石子的最大得分.js
 */
/*
 * @lc app=leetcode.cn id=1753 lang=javascript
 *
 * [1753] 移除石子的最大得分
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 * 进行abc的排序，保证 小、 中、 大，干掉第一堆里面，第三堆比第二堆多的数量
 * 判断第一堆里面是否为0， 不为0就表示第二堆和第三堆的数量是一样的
 * 分别消掉第一堆的二分之一个数量，第二堆和第三堆都要减去相等的二分之一的a
 * 接着不断的减去第二堆和第三堆的数量
 */
var maximumScore = function (a, b, c) {
  // 1. 排序
  if (a > b) [a, b] = [b, a]
  if (a > c) [a, c] = [c, a]
  if (b > c) [b, c] = [c, b]
  var ans = 0 // 得分数
  var cnt1 = Math.min(c - b, a)
  a -= cnt1
  c -= cnt1
  ans += cnt1
  // 2. 把a消没
  if (a != 0) {
    if (a % 2 == 1) a -= 1
    b -= a / 2 | 0
    c -= a / 2 | 0
    ans += a
  }
  // 3. b跟c是一样的值
  ans += b
  return ans  
};
// @lc code=end

