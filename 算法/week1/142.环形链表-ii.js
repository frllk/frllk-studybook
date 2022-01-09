/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  if (!head) return null;
  let pre = head, cur = head; // 定义快慢指针，保证他们的起点一致
  while (cur && cur.next) {
    pre = pre.next; // 快指针走1步
    cur = cur.next.next; // 慢指针走2步
    if (pre === cur) {
      let temp = head;
      while (pre !== temp) {
        pre = pre.next;
        temp = temp.next;
      }
      return pre; // 只要出来了，证明相遇了，找到入环点了
    }
  }
  return null; // 如果出来了，证明有终点，没有入环点
};
// @lc code=end

