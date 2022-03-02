/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:34
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-02 23:01:22
 * @FilePath: \frllk-studybook\算法\week2\621.任务调度器.js
 */
/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  /**
   * 计算多个任务之间完成所有任务的最短时间数
   *  如果这些任务超过了时间间隔就按这些任务数时间相加
   *  如果没有，就是这些任务数之间的面积
   */
  const freq = _.countBy(tasks)
  const maxExec = Math.max(...Object.values(freq)) // 拷贝freq中的所有属性，放到maxExec中
  let maxCount = 0
  // 遍历freq里面的每一个值都要等于最大任务数，maxCount+1
  Object.values(freq).forEach(v => {
    if (v === maxExec) maxCount++
  })
  return Math.max((maxExec - 1) * (n + 1) + maxCount, tasks.length)
}

// @lc code=end

