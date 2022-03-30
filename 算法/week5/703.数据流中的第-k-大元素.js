/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k： 第K大元素
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  // 通过堆每次拿最小值
  this.k = k
  this.heap = new MinHeap() // new一个小根堆
  for (n of nums) {
    this.add(n) // 遍历数组，往堆中去添加小根堆
  }
};

/** 
 * @param {number} val
 * 添加方法
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.heap.offer(val) // 添加一个值
  if (this.heap.size() > this.k) { // 添加之后判断堆的长度是否达到极限了
    this.heap.poll() // 如果超出，就把堆顶元素吐出
  }
  return this.heap.peek() // 看下堆顶元素是多少，并输出
};

// 小根堆
class MinHeap {
  constructor(data = []) {
    this.data = data
    this.comparator = (a, b) => a - b
    this.heapify()
  }
  heapify () {
    if (this.size() < 2) return
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i)
    }
  }
  peek () {
    if (this.size() === 0) return null
    return this.data[0]
  }
  offer(value) {
    this.data.push(value)
    this.bubbleUp(this.size() - 1)
  }
  poll() {
    if (this.size() === 0) return null
    const result = this.data[0]
    const last = this.data.pop()
    if (this.size() !== 0) {
      this.data[0] = last
      this.bubbleDown(0)
    }
    return result
  }
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }
  bubbleDown(index) {
    const lastIndex = this.size() - 1
    while (true) {
      const leftIndex = index * 2 + 1
      const rightIndex = index * 2 + 2
      let findIndex = index
      if (
        leftIndex <= lastIndex && 
          this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
        ) {
        findIndex = leftIndex
      }
      if (
        rightIndex <= lastIndex && 
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex
      }
      if (index !== findIndex) {
        this.swap(index, findIndex)
        index = findIndex
      } else {
        break
      }
    }
  }
  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]]
  }
  size() {
    return this.data.length
  }
}
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

