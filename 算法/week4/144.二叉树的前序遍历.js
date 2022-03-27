/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:47
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-27 00:07:14
 * @FilePath: \frllk-studybook\算法\week4\144.二叉树的前序遍历.js
 */
/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * 前序遍历：根左右，递归的方式：封装函数
 * @return {number[]}
 */
// 前期操作
var preorderTraversal = function(root) {
  let ans = [] // 定义一个空数组，用于最后返回。存放的是每一次遍历最后存储的每一层的节点的值
  travese(root, ans)
  return ans
};
// 封装函数：封装做的一些操作
var travese = function (root, ans) {
  if (!root) return null // 如果根节点不存在，返回null
  ans.push(root.val) // 根节点的值
  travese(root.left, ans) // 左子树
  travese(root.right, ans) // 右子树
}
// @lc code=end

