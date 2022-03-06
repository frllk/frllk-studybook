/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:32
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-06 23:56:37
 * @FilePath: \frllk-studybook\算法\week2\145.二叉树的后序遍历.js
 */
/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  // 递归写法
  // let res = new Array()
  // return postorderTraversalNode(root, res)
  // 迭代写法：模拟树 后序遍历：左右中，栈：先进后出，利用栈的特性，逆序的添加进栈
  // 先把中压入栈，然后把右压入栈，然后把左压入栈，输出的时候先输出左，在输出右，最后输出中
  // 前后中：
  // 前
  // 后
  // 中
  let res = []
  if (!root) return res
  let stack = [root]
  while (stack.length) {
    root = stack.pop()
    res.unshift(root.val)
    if (root.left) stack.push(root.left)
    if (root.right) stack.push(root.right)
  }
  return res
};
// 递归写法
var postorderTraversalNode = function (node, res) {
  if (node) {
    postorderTraversalNode(node.left, res)
    postorderTraversalNode(node.right, res)
    res.push(node.val)
  }
  return res
}
// @lc code=end

