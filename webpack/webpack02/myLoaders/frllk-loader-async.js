/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-06-18 17:33:31
 * @LastEditors: frllk
 * @LastEditTime: 2022-06-18 22:58:21
 * @FilePath: \frllk-studybook\webpack\webpack02\myLoaders\frllk-loader-async.js
 */
/**
 * 
 * 官方文档：https://webpack.js.org/contribute/writing-a-loader/
 * 接口文档：https://webpack.docschina.org/api/loaders/
 * loader的结构：
 * 官方约定：
 *    一个loader只能做一件事情
 *    不要用箭头函数
 * 1. loader就是一个函数，但是不可以是箭头函数？
 * 2. loader必须有返回值，string or buffer, 如果没有返回值就会出错 "didn't return a Buffer or StringFinal loader (./myLoaders/frllk-loader.js) didn't return a Buffer or String"
 * 3. loader如何接收配置？
 *    通过loader API, 获取外部参数 
 *    this.query：
 *      如果这个 loader 配置了 options 对象的话，this 就指向这个对象。
 *      如果 loader 中没有 options，而是以 query 字符串作为参数调用时，this.query 就是一个以 ? 开头的字符串。
 * 4. 如何返回多个信息？
 *    this.callback有同步调用和异步调用两种方式
 * 5. loader有异步逻辑如何处理？
 *    需要通过一个接口告诉loader runner是这个loader内部是有异步逻辑或者回调的
 * 6. 多个loader之间是如何配置的呢？
 * 7. 如何处理路径问题
 *    webpack.config.js文件中配置resolveLoader
 */

module.exports = function (source) {
  // return source.replace('Hello', this.query.name)
    // const info = source.replace('Hello', this.query.name)
    // this.callback(null, info)
  
  //   setTimeout(() => {
  //   const info = source.replace('Hello', this.query.name)
  //   return info // Final loader (./myLoaders/frllk-loader.js) didn't return a Buffer or String
  // }, 2000);

  const callback = this.async()
  setTimeout(() => {
    const info = source.replace('Hello', this.query.name)
    callback(null, info)
  }, 2000);
}