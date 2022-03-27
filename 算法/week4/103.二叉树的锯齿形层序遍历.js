/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:47
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-27 17:39:32
 * @FilePath: \frllk-studybook\算法\week4\103.二叉树的锯齿形层序遍历.js
 */
/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * 这道题与从上到下打印很相近，不同的就是将从上到下的结果，进行判断
 * 索引为奇数的数组中的元素进行反转
 * 索引为偶数的不变
 * 【蛇形走位】
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let ans = []
  getResult(root, 0, ans)
  // 索引判断
  for (let k = 1; k < ans.length; k+=2) {
    for (let i = 0, j = ans[k].length - 1; i < j; i++, j--) {
      [ans[k][i], ans[k][j]] = [ans[k][j], ans[k][i]]
    }
  }
  return ans
};
// 封装函数
var getResult = function (root, k, ans) {
  if (!root) return null
  if (k === ans.length) ans.push(new Array())
  ans[k].push(root.val)
  getResult(root.left, k + 1, ans)
  getResult(root.right, k + 1, ans)
}
// @lc code=end

