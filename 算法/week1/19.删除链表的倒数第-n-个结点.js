/*
 * @Author: your name
 * @Date: 2022-01-09 23:08:39
 * @LastEditTime: 2022-01-12 22:31:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \frllk-studybook\算法\week1\19.删除链表的倒数第-n-个结点.js
 */
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // head是否为空
  if (!head) return null;
  // 创建一个虚头，创建两个指针，一个指向虚头pre，一个指向真实头结点cur
  let ret = new ListNode(-1, head), pre = ret, cur = head;
  // 让cur移动K步
  for (let i = 0; i < n; i++) {
    cur = cur.next;
  }
  if (!cur) return head.next;
  // 然后让两个指针一起移动，直到cur指向空
  while (cur) cur = cur.next, pre = pre.next;
  // 然后进行删除操作
  pre.next = pre.next.next;
  return ret.next;
};
// @lc code=end

