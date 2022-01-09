/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
var rotateRight = function(head, k) {
  // 判断节点是否是空的节点
  if (!head) return null;
  // 找到链表的尾节点，穿成环, 获取到列表的长度
  let cur = head, size = 1;
  while (cur.next) cur = cur.next, size += 1;
  cur.next = head;
  // 找到第size-k个节点，然后将他断开
  for (let i = 0; i < size - k % size - 1; i++) {
    head = head.next;
  }
  cur = head.next;
  head.next = null
  return cur;
};
// @lc code=end