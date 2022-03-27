/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:47
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-27 16:50:29
 * @FilePath: \frllk-studybook\算法\week4\107.二叉树的层序遍历-ii.js
 */
/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
//  思路
// 这道题是从上到下打印二叉树 II的结果数组，进行反转得到
// 因为层序遍历是从下到上，上一题是从上到下遍历，因此这道题的结果就是将上一道题的结果反转得到
var levelOrderBottom = function(root) {
  let ans = []
  getResult(root, 0, ans)
  // 注意：反转（返回其节点值 自底向上的层序遍历）
  for (let i = 0, j = ans.length - 1; i < j; i++, j--) {
    [ans[i], ans[j]] = [ans[j], ans[i]]
  }
  return ans
};
var getResult = function (root, k, ans) {
  if (!root) return null
  if (k === ans.length) ans.push(new Array())
  ans[k].push(root.val)
  getResult(root.left, k + 1, ans)
  getResult(root.right, k + 1, ans)
}
// @lc code=end

