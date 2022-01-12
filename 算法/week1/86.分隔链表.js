/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-01-12 23:32:50
 * @LastEditors: frllk
 * @LastEditTime: 2022-01-13 07:58:45
 * @FilePath: \frllk-studybook\算法\week1\86.分隔链表.js
 */
/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head) return null;
  // 创建两个链表，一个链表存储比X小的元素，一个链表存储比X大的元素
  let big = new ListNode(), small = new ListNode();
  // 为两个链表定语两个指针
  let bigNode = big, smallNode = small;
  // 定义原链表的头指针，然后进行比较，连接到对应的链表，然后进行移动
  for (let cur = head, next; cur; cur = next) {
    next = cur.next;
    cur.next = null;
    if (cur.val < x) {
      smallNode.next = cur;
      smallNode = cur;
    } else {
      bigNode.next = cur;
      bigNode = cur;
    }
  }
  // 将两个链表拼接在了一起
  smallNode.next = big.next;
  return small.next;
};
// @lc code=end

