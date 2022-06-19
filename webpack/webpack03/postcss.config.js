/**
 *  postcss的配置文件
 */

module.exports = {
  // plugins: [require("autoprefixer")]({
  //   // autoprefixer插件自身也可以配置浏览器集合, 权重高于package.json 和 .browserlistrc
  //   // 如果这里没有配置，则会去查找package.json 和 .browserlistrc
  //   overrideBrowserlist:[]
  // })
  // cssnano css压缩
  plugins: [require("autoprefixer"), require("cssnano")]
}
