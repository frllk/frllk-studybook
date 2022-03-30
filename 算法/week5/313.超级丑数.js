/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-02-10 11:08:49
 * @LastEditors: frllk
 * @LastEditTime: 2022-03-30 22:30:24
 * @FilePath: \frllk-studybook\算法\week5\313.超级丑数.js
 */
/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 * 也是新建数组，存储我们素因子相乘或者自乘的值去重
 */
var nthSuperUglyNumber = function(n, primes) {
  const res = [1]
  const points = new Array(primes.length).fill(0)
  let min, map; // min: 最小值  map：存放的每一个丑数
  for (let i = 1; i < n; i++) {
    map = primes.map((prime, index) => res[points[index]] * prime)
    min = Math.min.apply(null, map) // Math.min.apply：求最小值
    // 去重
    primes.forEach((prime, index) => {
      if (map[index] === min) points[index]++
    })
    res.push(min)
  }
  return res[n-1]
};
// @lc code=end

