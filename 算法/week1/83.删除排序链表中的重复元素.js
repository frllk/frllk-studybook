/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
  if (!head) return null;
  let pre = head, cur = head.next;
  while (cur) {
    if (pre.val != cur.val) {
      pre.next = cur;
      pre = cur;
      cur = cur.next;
    } else {
      cur = cur.next;
    }
  }
  pre.next = null; 
  return head;
};
// @lc code=end

