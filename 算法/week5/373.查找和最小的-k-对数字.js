/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的 K 对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  const heap = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (heap.length < k) { // 判断大根堆中容量是否够
        heap.push([nums1[i], nums2[j]])
        shiftUp(heap, heap.length - 1)
      } else if ((nums1[i] + nums2[j]) < sum(heap[0])) { // 大根堆容量够了，判断当前的组合是否比堆顶的组合大
        heap[0] = [nums1[i], nums2[j]]
        shiftDown(heap, 0)
      }
    }
  }
  return heap.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))
};

var sum = function (arr) {
  return arr[0] + arr[1]
}
var swap = function (heap, index, parent) {
  [heap[index], heap[parent]] = [heap[parent], heap[index]]
}
// 大顶堆上浮
var shiftUp = function (heap, i) {
  const parent = (i - 1) / 2 | 0
  if (sum(heap[i]) > sum(heap[parent])) {
    swap(heap, i, parent)
    shiftUp(heap, parent)
  }
}
// 大顶堆下沉
var shiftDown = function (heap, index) {
  let left = index * 2 + 1
  if (left >= heap.length) return
  if (left + 1 < heap.length && sum(heap[left]) < sum(heap[left + 1])) {
    left = left + 1
  }
  if (sum(heap[index]) <= sum(heap[left])) {
    swap(heap, index, left)
    shiftDown(heap, left)
  }
}
// @lc code=end

