/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-06-19 10:23:51
 * @LastEditors: frllk
 * @LastEditTime: 2022-06-19 11:26:22
 * @FilePath: \frllk-studybook\webpack\webpack03\src\index.js
 */
import css from './style/index.less'
import pic from './images/img.jpg' // 用什么loader？file-loader、url-loader

// 1.1 js dom操作
// const img = new Image()
// img.src = pic
// console.log('pic', pic)
// const tag = document.getElementById('app')
// tag.append(img)

// console.log('hello webpack')

/** 
 * 1. 使用图片的场景
 *    js dom
 *    css
 *    html img
 * 2. 问题：
 *    图片名
 *    图片格式
 *    目录管理：图片、文件、css分开
 *        引用路径问题：
 *          前提：对资源文件做了目录管理
 *          对图片进行目录管理没有问题
 *          如果css和图片都做了目录管理，css中图片的路径就对不上了，通过设置file-loader中的publicPath来解决问题
 */