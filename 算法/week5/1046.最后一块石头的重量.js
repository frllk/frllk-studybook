/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  const maxHeap = new MaxPriorityQueue() // new一个大根堆
  for (let i = 0; i < stones.length; i++) {
    maxHeap.enqueue('x', stones[i]) // 随便存一个数据'x', 数据不重要，需要的是石头的重量，把每个石头的重量扔进去
  }
  while (maxHeap.size() > 1) {
    // 每次取出来一个堆顶的元素，通过优先级取
    const a = maxHeap.dequeue()['priority'] // 拿到第一个最大的元素
    const b = maxHeap.dequeue()['priority'] // 拿到次大的元素
    if (a > b) {
      maxHeap.enqueue('x', a - b)
    }
  }
  return maxHeap.isEmpty() ? 0 : maxHeap.dequeue()['priority']
};
// @lc code=end

