/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:48
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-27 01:11:47
 * @FilePath: \frllk-studybook\算法\week4\226.翻转二叉树.js
 */
/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
   // 如果二叉树为空，则返回null, 如果不为空，在进行后序操作
  if (!root) {
    return null
  }
  // ES6的解构赋值，先翻转root的左子树和右子树，两两交换
  // const left = invertTree(root.left)
  // const right = invertTree(root.right)
  // root.left = right
  // root.right = left
 
  // // root 节点需要交换它的左右子节点
  // [root.left, root.right] = [root.right, root.left]
  // // 让左右子节点继续翻转它们的子节点
  // invertTree(root.left) // 翻转它的左子树
  // invertTree(root.right) // 翻转它的右子树
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  return root
};
// @lc code=end

