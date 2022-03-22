/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:33
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-21 23:17:23
 * @FilePath: \frllk-studybook\算法\week2\227.基本计算器-ii.js
 */
/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.trim() // 去除字符串两端空格
  let stack = new Array() // 定义一个栈
  let preSign = '+' // 默认一个前置位是“+”
  let num = 0 // 默认最开始的数加0
  for (let i = 0; i < s.length; i++) {
    // 是数字并且不为空时
    if (!isNaN(s[i]) && s[i] !== ' ') {
      num = num * 10 + Number(s[i])
    }
    // 符号或者走到末尾时
    if (isNaN(s[i]) || i == s.length - 1) {
      switch (preSign) {
        case '+':
          stack.push(num)
          break;
        case '-':
          stack.push(-num)
            break;
        case '*':
          stack.push(stack.pop() * num)
              break;
        case '/':
          stack.push(stack.pop() / num | 0)
                break;
        default:
          break;
      }
      preSign = s[i]
      num = 0
    }
  }
  return stack.reduce((a, b) => a + b)
};
// @lc code=end

