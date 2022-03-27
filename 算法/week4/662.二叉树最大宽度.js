/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
   * 给整个树做一个编号，从左到右，从上到下开始
   * root 的编号为1，那么root的左孩子编号就为2， 右孩子就为3
   * root.left 的index = root的index*2
   * root.right 的index = root的index*2 + 1
   * 然后我们定义一个变量max 来记录宽度的最大值，每层的序号相减完毕和max进行比较取最大值
   * 宽度width就是 Rindex - Lindex + 1
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  if (!root) return 0
  // 定义一个二维数组存储当前层的序号和节点
  // 1n 数太大了，需要用大数来表示
  let max = 1n, que = [[0n, root]];
  while (que.length) {
    let width = que[que.length - 1][0] - que[0][0] + 1n
    if (width > max) max = width
    let temp = []
    for (const [i, q] of que) {
      q.left && temp.push([ i * 2n, q.left])
      q.right && temp.push([ i * 2n + 1n, q.right])
    }
    que = temp
  }
  return Number(max)
};
// @lc code=end

