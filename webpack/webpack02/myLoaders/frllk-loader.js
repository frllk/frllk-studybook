/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-06-18 17:33:31
 * @LastEditors: frllk
 * @LastEditTime: 2022-06-18 22:45:18
 * @FilePath: \frllk-studybook\webpack\webpack02\myLoaders\frllk-loader.js
 */
module.exports = function (source) {
  return source.replace('webpack', 'webpack!!!')
}