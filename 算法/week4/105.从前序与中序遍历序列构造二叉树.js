/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder 前序遍历数组
 * @param {number[]} inorder 中序遍历数组
 * 已知：给了我们一共前序遍历数组和中序遍历数组，前序遍历：根左右，中序遍历：左根右
 * 根据遍历的特性可知，前序遍历数组的第一个元素，是整个树的根结点，我们就能获取到根结点的值
 * 在中序遍历数组中，找到根结点的位置mid，就可以分隔左右子树——左子树（istart ~ mid - 1), 右子树(mid + 1 ~ inorder.length - 1）
 * 获取左子树的节点个数leftNum，用来获取在前序遍历数组中左子树和右子树的分割点
 * 左子树：pStart + 1 ~ pStart + leftNum, 右子树：pStart + leftNum + 1 ~ preorder.length - 1
 * 按上述步骤分别去构建左右子树
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i) // 将值与坐标映射，用法：拿到值去获取坐标
  }
  const helper = function (pStart, pEnd, iStart, iEnd) { // pStart：前序开始坐标, pEnd：前序结束坐标, iStart：中序开始坐标, iEnd：中序结束坐标
    /** 证明我们的前序遍历数组已经使用完毕 */
    if (pStart > pEnd) return null // 如果头索引大于尾索引，结束——树已构建完成
    let rootVal = preorder[pStart] // 获取根结点的值
    let root = new TreeNode(rootVal) // 构造一个根结点
    //  找子节点：从中序遍历中找到根结点，然后再去匹配它左侧的值跟右侧的值
    /** 获取根结点在中序遍历数组中的索引位置，来分隔左右子树 */
    let mid = map.get(rootVal) // mid左侧为左子树 右侧为右子树
    /** 计算左子树的节点个数，用来在前序遍历数组确定左子树结束的位置 */
    let leftNum = mid - iStart // 左子树一共有多少节点：终点mid（根结点的坐标） - 开始值的坐标
    /** 递归的构建左子树 */
    root.left = helper(pStart + 1, pStart + leftNum, iStart, mid - 1)
    /** 递归的构建右子树 */
    root.right = helper(pStart + leftNum + 1, pEnd, mid + 1, iEnd)
    return root
  }
  return helper(0, preorder.length -1, 0, inorder.length - 1)
};
// @lc code=end

