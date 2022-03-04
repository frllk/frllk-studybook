/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:34
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-05 00:41:04
 * @FilePath: \frllk-studybook\算法\week2\946.验证栈序列.js
 */
/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let cur = 0, stack = [];
  for (item of pushed) {
    stack.push(item)
    while (stack[stack.length - 1] === popped[cur] && stack.length) {
      // 如果stack中有值，并且最后一个元素与popped[cur]相等时，就从stack中出栈
      stack.pop()
      cur++ // 指针向后走一步，找到要输出的下一个数，再次进行对比
    }
  }
  // 栈为空的话，说明pushed数组可以按popped形式输出
  return !stack.length
};
// @lc code=end

