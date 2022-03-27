/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:47
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-27 17:56:02
 * @FilePath: \frllk-studybook\算法\week4\110.平衡二叉树.js
 */
/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * 思路：
 * 先获取二叉树的高度，然后依次遍历左右两个子树
 * 如果不平衡返回负数
 * 如果是平衡的二叉树，就返回高度
 * @return {boolean}
 */
var isBalanced = function(root) {
  return getHeight(root) >= 0
};
// 封装函数：获取二叉树的高度
var getHeight = function (root) {
  if (!root) return 0
  let l = getHeight(root.left) // 获取左子树的高度
  let r = getHeight(root.right) // 获取右子树的高度
  if (l < 0 || r < 0) return -1
  if (Math.abs(l - r) > 1) return -1
  return Math.max(l, r) + 1
}
// @lc code=end

