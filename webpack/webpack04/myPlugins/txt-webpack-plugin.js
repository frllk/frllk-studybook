/*
 * @Autor: frllk
 * @Description: txt-webpack-plugin.js
 * @Date: 2022-06-28 23:28:46
 * @LastEditors: frllk
 * @LastEditTime: 2022-06-29 00:06:22
 * @FilePath: \frllk-studybook\webpack\webpack04\myPlugins\txt-webpack-plugin.js
 */

// 插件的结构  类

//  必须要用apply函数

class TxtWebpackPlugin {
  constructor(options) {
    console.log(options);
  }
  // 提供当前打包的compiler对象，可以拿到钩子，注册事件
  apply(compiler) {
    // compiler.hooks
    compiler.hooks.emit.tapAsync("TxtWebpackPlugin", (compilation, cb) => {
      // console.log(compilation.assets)
      // 往资源模块中添加一个资源
      // emit AsyncSeriesHook  在⽣成⽂件到output⽬录之前执⾏，回调参数：compilation
      const content = `这是一个测试的资源模块`
      compilation.assets["frllk.txt"] = {
        source: function () {
          return content
        },
        size: function () {
          return content.length // 打包信息栏的显示信息，并不影响文件的真实体积，需要保持文档的准确性
        }
      }
      cb()
    })
  }   
}
 
module.exports = TxtWebpackPlugin

