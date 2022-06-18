/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-06-19 00:01:20
 * @LastEditors: frllk
 * @LastEditTime: 2022-06-19 00:17:37
 * @FilePath: \frllk-studybook\webpack\webpack02\myLoaders\frllk-css-loader.js
 */
/**
 * css-loader: 对css进行序列化
 */

module.exports = function (source) {
  return JSON.stringify(source)
}