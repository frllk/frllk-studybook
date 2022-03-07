/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:32
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-07 23:00:58
 * @FilePath: \frllk-studybook\算法\week2\331.验证二叉树的前序序列化.js
 */
/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  let n = preorder.length
  let stack = [1]
  let i = 0
  while (i < n) {
    if (!stack.length) return false
    if (preorder[i] === ',') i++
    else if (preorder[i] === '#') {
      // 只减不增
      stack[stack.length - 1]--
      if (stack[stack.length - 1] === 0) {
        stack.pop()
      }
      i++
    } else {
      while (i < n && preorder[i] !== ',') {
        i++
      }
      stack[stack.length - 1]--
      if (stack[stack.length - 1] == 0) {
        stack.pop()
      }
      stack.push(2)
    }
  }
  return !stack.length
};
// @lc code=end

