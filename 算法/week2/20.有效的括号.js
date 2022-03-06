/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:32
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-06 21:29:16
 * @FilePath: \frllk-studybook\算法\week2\20.有效的括号.js
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 定义一个栈
  let stack = []
  // // 使用map设置好映射关系
  // let map = new Map([
  //   [')', '('],
  //   [']', '['],
  //   ['}', '{']
  // ])
  // // 遍历s
  // for (ch of s) {
  //   if (map.has(ch)) {
  //     // 如果包含
  //     // 需要判断栈是否空了， 或者从map中取出的映射值不等于栈顶元素， return false
  //     if (!stack.length || map.get(ch) !== stack[stack.length - 1]) {
  //       return false
  //     }
  //     // 否组表示配对成功，需要把栈顶元素弹出
  //     stack.pop()
  //   } else {
  //     stack.push(ch) // 如果不包含，就存到栈里
  //   }
  // }
  for (ch of s) {
    switch (ch) {
      case '(':
      case '[':
      case '{':
        stack.push(ch);
        break;
      case ')':
        if (stack.pop() !== '(') return false
        break;
      case ']':
        if (stack.pop() !== '[') return false
        break;
      case '}':
        if (stack.pop() !== '{') return false
            break;
    }
  }
  return !stack.length // 如果stack为空，表示所有元素都弹出了，都匹配上了
};
// @lc code=end

