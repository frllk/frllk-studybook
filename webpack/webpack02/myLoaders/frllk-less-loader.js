/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-06-19 00:01:27
 * @LastEditors: frllk
 * @LastEditTime: 2022-06-19 00:30:59
 * @FilePath: \frllk-studybook\webpack\webpack02\myLoaders\frllk-less-loader.js
 */
/**
 * less-loader：把less语法转换成css
 * less ====> css
 */
const less = require('less')

module.exports = function (source) {
  // render渲染，对内容进行处理
  // error: 错误信息
  // 第二个参数：表示是将源码生成什么样子 将output的css格式拿出来
  less.render(source, (error, {css}) => {
    // 同步的调用，这里有error，返回回去
    this.callback(error, css)
  })
}