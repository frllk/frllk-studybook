/*
 * @Autor: frllk
 * @Description: 
 * @Date: 2022-06-07 22:57:30
 * @LastEditors: frllk
 * @LastEditTime: 2022-06-19 11:22:59
 * @FilePath: \frllk-studybook\webpack\webpack03\webpack.config.js
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
    path: resolve(__dirname, './dist') ,
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
        ] // 执行顺序：从右到左，从下到上
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/, // 解决图片格式问题
        use: {
          loader: 'file-loader',
          options: {
            // name: 'images/[name].[ext]', // 方法二：不使用outputPath，在name中的名字前加上目录路径
            name: '[name].[ext]', // 解决图片名的问题
            outputPath: "images", // 解决问题目录管理：方法一：通过outputPath设置图片资源的存放位置
            // 图片资源如何引入的位置：解决对资源文件做了目录管理造成的路径引用出错问题
            publicPath: '../images', // ../images/img.jpg
          }
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 目录清理
    new miniCssPlugin({
      filename: "style/index.css"
    }), // 样式抽取成独立的文件
    new htmlwebpackPlugin({
      template: "./src/public/index.html",
      filename: "index.html",
      chunks: ["index"]
    })
  ],
}