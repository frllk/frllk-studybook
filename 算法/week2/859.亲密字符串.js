/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  if (s.length !== goal.length) return false;
  if (s === goal) {
    return s.length > new Set(goal).size; // 去重
  }
  let a = '';
  let b = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) { // 寻址s和goal中不同字符的位置
      a = s[i] + a; // 让不同的字符互相交换，继续找下一处不同的位置
      b += goal[i];
    }
  }
  return a.length === 2 && a === b;
};
// @lc code=end

