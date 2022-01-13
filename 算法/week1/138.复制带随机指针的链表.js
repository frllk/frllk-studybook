/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-01-12 23:32:50
 * @LastEditors: frllk
 * @LastEditTime: 2022-01-13 22:28:37
 * @FilePath: \frllk-studybook\算法\week1\138.复制带随机指针的链表.js
 */
/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;
  // 创建两个指针，一个指向头结点
  let p = head, q;
  // 遍历整个链表，复制每个节点，并将值全部复制成一样的，然后拼接到原节点的后面
  while (p) {
    // 复制节点，并连接在原节点之后
    q = new ListNode(p.val);
    q.next = p.next;
    q.random = p.random;
    p.next = q;
    p = q.next;
  }
  // 找到一个克隆节点，然后进行修正random，将克隆节点的random指向克隆节点
  p = head.next;
  while (p) {
    p.random && (p.random = p.random.next);
    (p = p.next) && (p = p.next); // 往后走两步
  }
  // 拆分链表，分成原节点链表和克隆节点链表
  p = q = head.next;
  while (q.next) {
    head.next = head.next.next;
    q.next = q.next.next;
    head = head.next;
    q = q.next;
  }
  head.next = null;
  // 返回我们的克隆节点链表
  return p;
};
// @lc code=end

