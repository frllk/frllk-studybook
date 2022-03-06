/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:32
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-06 21:57:49
 * @FilePath: \frllk-studybook\算法\week2\1249.移除无效的括号.js
 */
/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  // 记录需要删除的多余括号的索引
  let leftDel = [], rightDel = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      leftDel.push(i)
    } else if (s[i] === ')') {
      // 遇到右括号，看下有没有对应的左括号，如果有则弹出，没有则记录下索引
      if (leftDel.length) leftDel.pop()
      else rightDel.push(i)
    }
  }
  // 根据记录删除
  const res = [...s], del = leftDel.concat(rightDel);
  for (let i = 0; i < del.length; i++) {
    res[del[i]] = ''
  }
  return res.join('');
};
// @lc code=end

