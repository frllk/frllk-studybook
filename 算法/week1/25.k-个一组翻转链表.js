/*
 * @Author: your name
 * @Date: 2022-01-07 21:19:12
 * @LastEditTime: 2022-01-09 00:45:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \leetcode\week1\25.k-个一组翻转链表.js
 */
/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head) return null;
  let ret = new ListNode(-1, head), pre = ret;
  do {
    pre.next = reverse(pre.next, k);
    for (let i = 0; i < k && pre; i++) {
      pre = pre.next;
    }
    if (!pre) break;  // 如果为空表示没有待翻转的了，则结束循环
  } while (1)
  return ret.next;
};
var reverse = function (head, n) {
  let pre = head, cur = head, con = n;
  while (--n && pre) {
    pre = pre.next;
  }
  if (!pre) return head;
  pre = null;
  while (con--) {
    [cur.next, pre, cur] = [pre, cur, cur.next];
  }
  head.next = cur;
  return pre;
}
// @lc code=end

