/*
 * @Author: your name
 * @Date: 2021-12-31 07:11:03
 * @LastEditTime: 2021-12-31 07:17:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \frllk-studybook\1.demo.js
 */
// 怎么判断数组类型
function isArray(arr) {
  if (Array.isArray(arr)) return true
  if (Object.prototype.toString.call(arr) ===   '[object Array]') return true
  if (Array.prototype.isPrototypeOf(arr)) return true
  if (arr.__proto__.constructor === Array) return true
  return false
}
const list = [1, 2, 3]
console.log(`判断数组类型: ${ isArray(list) ? '是' : '否'}数组`)
