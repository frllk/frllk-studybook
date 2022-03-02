/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:33
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-01 22:36:26
 * @FilePath: \frllk-studybook\算法\week2\860.柠檬水找零.js
 */
/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0, ten = 0;
  if (bills[0] == 10 || bills[0] == 20) return false // 如果第一次是10或者20，直接返回false
  for (const bill of bills) {
    if (bill === 5) five++;
    if (bill === 10) {
      ten++;
      five--;
    }
    if (bill === 20) {
      if (ten && five) {
        ten--;
        five--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
    if (ten < 0 || five < 0) {
      return false; // 不能找零的时候，退出循环
    }
  }
  return true; // 返回可以找零
};
// @lc code=end

