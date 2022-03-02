/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:34
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-02 08:12:03
 * @FilePath: \frllk-studybook\算法\week2\969.煎饼排序.js
 */
/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
  // 1.找到数组中最大值的下标，然后反转前k个元素，把最大值放前面，然后把最大值放后面，然后在次大值，如此循环
  // 2.反转数组，反转[0, arr.length-1]
  let ans = [], max;
  while (arr.length > 1) {
    max = getMaxIndex(arr)
    max > 0 && (ans.push(max + 1))
    reverse(arr, max);
    reverse(arr, arr.length - 1);
    ans.push(arr.length);
    arr.pop();
  }
  return ans;
};
// 1.找到最大数的下标
function getMaxIndex(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
      max = i;
    }
  }
  return max;
}
// 2.反转前k个元素, 反转数组从0到数组长度-1
var reverse = function (arr, k) { 
  if (k < 1) return
  // i: 代表0, j:代表k
  let i = 0, j = k;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}
// @lc code=end

