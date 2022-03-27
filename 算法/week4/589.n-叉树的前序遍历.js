/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * 注意：对根节点children的遍历
 * 递归：封装函数
 * @return {number[]}
 */
// 前期操作
var preorder = function(root) {
  let ans = [] // 定义一个空数组，存放将要遍历出来的所有节点 
  travese(root, ans) // 定义一个封装函数travese, 传递两个参数root和ans
  return ans // 返回ans
};

var travese = function (root, ans) {
  if (!root) return null // 判断根节点是否为空，如果为空直接返回，不为空，则将root.val放入ans中
  ans.push(root.val)
  // N叉树的子树是children，有很多的子树，通过遍历，将值放入ans
  for (x of root.children) {
    travese(x, ans)
  }
  return ans
}
// @lc code=end

