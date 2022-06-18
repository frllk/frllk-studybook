/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-06-07 22:57:30
 * @LastEditors: frllk
 * @LastEditTime: 2022-06-18 23:06:20
 * @FilePath: \frllk-studybook\webpack\webpack02\webpack.config.js
 */
// webpack的配置文件
const { resolve, format } = require("path")
const htmlwebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin") 
const miniCssPlugin = require("mini-css-extract-plugin")

// webpack是基于nodeJS
// 原理就是通过shell脚本在node_modules/.bin⽬录下创建⼀个软链接
module.exports = {
  // 入口
  // spa：单页面应用
  // mpa：多页面应用   多入口  对应  多出口
  // entry: "./src/index.js",
  entry: {
    // index: modules = [index.js, a.js] = [chunk, chunk] = chunks
    // index == chunkName
    index: "./src/index.js", // index.js  a.js index.css
  },
  // 出口
  output: {
    // 生成的资源存放的位置, 必须是绝对路径
    path: resolve(__dirname, './build') ,
    // 生成的资源文件名
    // filename: 'index.js'  // 占位符 [name]
    filename: '[name][chunkhash:8].js'  // 占位符 [name]，⽂件名称不要重复
  },
  mode: "development", // none（既无开发体验，也无优化） development（开发体验） production(优化)
  // 7. 如何处理路径问题: 解决了问题7
  resolveLoader: {
    modules: ["./node_modules", "./myLoaders"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [miniCssPlugin.loader, 'css-loader'] // 执行顺序：自后往前
      },
      {
        test: /\.less$/,
        use: [
          miniCssPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ] // 执行顺序：自后往前   //! 不知为何entry为单入口的时候生成的文件没有自动引入css和js
        /**
         * 关于样式常见的场景：
         * 如何支持样式
         * 如何支持less sass
         * 如何支持postcss
         * 如何把样式处理成独立文件
         * css进行模块化
         */
      },
      {
        test: /\.js$/, // 如果遇到js后缀的文件，用自己写的loader进行处理
        // 使用第三方的loader默认去node_modules去查找，如果是使用自己写的loader，则是通过path，生成绝对路径
        // use: resolve(__dirname, "./myLoaders/frllk-loader.js")
        // 配置化需求：解决了问题6
        // use: [
        //   {
        //     loader: resolve(__dirname, "./myLoaders/frllk-loader-async.js"), // 需要使⽤node核⼼模块path来处理路径
        //     options: {
        //       name: 'frllk'
        //     }
        //     // console.log('frllk webpack!!!')
        //   },
        //   resolve(__dirname, "./myLoaders/frllk-loader.js") // console.log('Hello webpack!!!')
        // ]
        // 路径处理：解决问题7
        use: [
          {
            loader: "frllk-loader-async",
            options: {
              name: 'frllk'
            }
            // console.log('frllk webpack!!!')
          },
          "frllk-loader" // console.log('Hello webpack!!!')
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 目录清理
    new miniCssPlugin({
      filename: "index.css"
    }), // 样式抽取成独立的文件
    new htmlwebpackPlugin({
      template: "./src/public/index.html",
      filename: "index.html",
      chunks: ["index"]
    })
  ],
}