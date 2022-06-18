/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-06-19 00:01:06
 * @LastEditors: frllk
 * @LastEditTime: 2022-06-19 00:30:16
 * @FilePath: \frllk-studybook\webpack\webpack02\myLoaders\frllk-style-loader.js
 */
/**
 * style-loader: 操作DOM，创建style
 * 拿到上一个loader返回的css，塞到style标签内部
 * 会把css-loader⽣成的内容，以style挂载到⻚⾯的heade部分
 */

module.exports = function (source) {
  return `
  
    const tag = document.createElement("style");

    tag.innerHTML = ${source};

    document.head.appendChild(tag)
  `
}

