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
    login: "./src/login.js" // login.js
  },
  // 出口
  output: {
    // 生成的资源存放的位置, 必须是绝对路径
    path: resolve(__dirname, './build') ,
    // 生成的资源文件名
    // filename: 'index.js'  // 占位符 [name]
    filename: '[name].js'  // 占位符 [name]
  },
  mode: "development", // none（既无开发体验，也无优化） development（开发体验） production(优化)
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'] // 执行顺序：自后往前
        use: [miniCssPlugin.loader, 'css-loader'] // 执行顺序：自后往前
      }
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
    }),
    new htmlwebpackPlugin({
      template: "./src/public/login.html",
      filename: "login.html",
      chunks: ["login"]
    }),
  ],
}