/*
 * @lc app=leetcode.cn id=636 lang=javascript
 *
 * [636] 函数的独占时间
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  // 记录每个任务花费的时间
  let res = new Array(n).fill(0)
  let go = 0 // 要执行的第几个任务
  function next() {
    let dure = 0 // 记录子任务花费的时长
    const start = logs[go].split(':')
    while (go < logs.length - 1 && logs[go + 1].indexOf('s') !== -1) {
      go++
      dure = dure + next()
    }
    const end = logs[++go].split(':')
    let sum = Number(end[2]) - Number(start[2]) + 1 - dure
    res[Number(start[0])] = res[Number(start[0])] + sum
    return sum + dure
  }
  while (go < logs.length) {
    next()
    go++
  }
  return res
};
// @lc code=end

