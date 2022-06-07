// webpack的配置文件
const {resolve} = require("path")
// webpack是基于nodeJS
// 原理就是通过shell脚本在node_modules/.bin⽬录下创建⼀个软链接
module.exports = {
  // 入口
  entry: "./src/index.js",
  // 出口
  output: {
    // 生成的资源存放的位置, 必须是绝对路径
    path: resolve(__dirname, './dist') ,
    // 生成的资源文件名
    filename: 'index.js'
  },
  mode: "development" // none（既无开发体验，也无优化） development（开发体验） production(优化)
}