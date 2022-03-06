/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:31
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-06 22:47:00
 * @FilePath: \frllk-studybook\算法\week2\1021.删除最外层的括号.js
 */
/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  // 输入：s = "(()())(())"
  // 输出："()()()"
  let res = ''
  let opened = 0;
  for (ch of s) {
    // opened > 0表示已经有了一个左括号，
    // 新找到的这个左括号就认为他不是最外层的括号, 就给他拼接起来，然后opened进行加1
    if (ch === '(' && opened++ > 0) res += ch
    // 简写形式
    // 如果opened>1 表示已经有了两个及以上的左括号，
    // 新找到的这个右括号就认为他不是最外层的括号, 就给他拼接起来，然后opened进行减1
    // i-- 先运行，在减去1
    // --i 先减去1，在运行
    if (ch===')' && opened-- > 1) res += ch
  }
  return res;
};
// @lc code=end

