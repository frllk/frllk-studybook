/*
 * @Autor: frllk
 * @Description: 模拟
 * @Date: 2022-06-27 22:39:32
 * @LastEditors: frllk
 * @LastEditTime: 2022-06-28 23:48:36
 * @FilePath: \frllk-studybook\webpack\webpack04\plugin.js
 */
const webpack = require("webpack") // 引入webpack
const config = require("./webpack.config") // 引入webpack打包配置

const compiler = webpack(config) // 执行webpack，把配置传进去，生成一个对象compiler，里面记录了本次打包的所有信息

// compiler.hooks()
Object.keys(compiler.hooks).forEach(hookName => {
  // 同步钩子 用tap
  // 异步钩子  用tapAsync
  compiler.hooks[hookName].tap("事件名称", (compilation) => {
    console.log('%c%s', 'color: red; background: yellow; font-size: 16px;', 'run---------->', hookName)
  })
})

compiler.run() // 入口函数

// webpack打包到编译，中间会触发那些节点？


// 钩子https://www.webpackjs.com/api/compiler-hooks/#%E7%9B%B8%E5%85%B3%E9%92%A9%E5%AD%90
// 同步钩子
// 异步钩子

