/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  /**
   * 我们最终的目的，就是找一个从根节点的数值累加到某一个叶子节点的数值的和等于targetSum
   * 因此，我们可以将targetSum减去当前节点的值，然后传递给当前节点的子节点
   * 如果当前节点没有子节点，就要判断targetSum是否为0，如果为0，就证明我们至少有一条路径
   * 如果没有一个到达叶子节点为0的情况，证明没有符合条件的路径
   */
  if (!root) return false
  if (!root.left && !root.right) return targetSum === root.val // 当前节点就是叶子节点
  // 有子节点
  targetSum -= root.val
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
};
// @lc code=end

