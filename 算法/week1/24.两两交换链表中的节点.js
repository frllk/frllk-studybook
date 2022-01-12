/*
 * @Author: your name
 * @Date: 2022-01-09 23:08:39
 * @LastEditTime: 2022-01-11 00:18:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \frllk-studybook\算法\week1\24.两两交换链表中的节点.js
 */
/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 判断head是否为空
  if (!head) return null
  // 将相邻的两个链表进行反转
  let ret = new ListNode(-1, head), temp = ret;
  while (temp.next && temp.next.next) {
    let pre = temp.next, cur = temp.next.next;
    // pre.next = cur.next;
    // cur.next = pre;
    // temp.next = cur;
    // temp = pre;
    [pre.next, cur.next, temp.next, temp] = [cur.next, pre, cur, pre];
  }
  // 然后返回链表
  return ret.next;
};
// @lc code=end

