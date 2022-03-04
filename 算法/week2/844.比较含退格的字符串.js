/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:33
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-04 23:57:59
 * @FilePath: \frllk-studybook\算法\week2\844.比较含退格的字符串.js
 */
/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  return processed(s) === processed(t)
};
var processed = function (str) {
  let stack = []
  for (ch of str) {
    if (ch === '#') stack.pop()
    else stack.push(ch)
  }
  return stack.join('')
}
// @lc code=end

