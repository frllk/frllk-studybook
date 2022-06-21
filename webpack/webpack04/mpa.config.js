// webpack的配置文件
const { resolve, join } = require("path")
const glob = require("glob")
const htmlwebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin") 
const miniCssPlugin = require("mini-css-extract-plugin")

// 走配置之前，走下这个函数：生成entry，实例化htmlwebpackPlugin
const setMPA = () => {
  const entry = {}
  const htmlwebpackPlugins = []

  // 查询页面入口模块  路径  以及相应html模块
  // 提取页面入口的名称，用于entry的chunkName
  // 约定：所有页面入口模块和相应的html模块都要放在一个目录下
  const entryPath = glob.sync(join(__dirname, "./src/*/index.js"))
  // console.log(entryPath)
  entryPath.map((item, index) => {
    const entryName = item.match(/src\/(.*)\/index\.js$/)[1]
    entry[entryName] = item
    htmlwebpackPlugins.push(
      new htmlwebpackPlugin({
        template:  join(__dirname, `./src/${entryName}/index.html`), // `./src/${entryName}/index.html`,
        filename: `${entryName}.html`,
        chunks: [entryName]
      })
    );
  })
  console.log('entry', entry);
  console.log('htmlwebpackPlugins', htmlwebpackPlugins);
  return {
    entry,
    htmlwebpackPlugins
  }
}

const { entry, htmlwebpackPlugins } = setMPA()

// webpack是基于nodeJS
// 原理就是通过shell脚本在node_modules/.bin⽬录下创建⼀个软链接
module.exports = {
  entry,
  output: {
    // 生成的资源存放的位置, 必须是绝对路径
    path: resolve(__dirname, './mpa') ,
    // 生成的资源文件名
    // filename: 'index.js'  // 占位符 [name]
    filename: 'js/[name][chunkhash:8].js'  // 占位符 [name]，⽂件名称不要重复
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
      // image-webpack-loader必须在url-loader或者file-loader之前使用
      // loader执行顺序：当多个loader作用于同一个模块的时候，顺序为自下往上，自后往前
      {
        test: /\.(png|jpe?g|gif|webp)$/, // 解决图片格式问题
        use: [
          {
            // loader: 'file-loader',
            loader: 'url-loader',
            options: {
              // name: 'images/[name].[ext]', // 方法二：不使用outputPath，在name中的名字前加上目录路径
              name: '[name].[ext]', // 解决图片名的问题
              outputPath: "images", // 解决问题目录管理：方法一：通过outputPath设置图片资源的存放位置
              // 图片资源如何引入的位置：解决对资源文件做了目录管理造成的路径引用出错问题
              publicPath: '../images', // ../images/img.jpg
              limit: 11 * 1024, // 1kb === 1024  limit: 预值
            }
          },
          "image-webpack-loader"
        ]
      },
      {
        test: /\.(eot|woff|woff2|wvg|ttf)$/,
        use: {
          loader: 'file-loader',
          // loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'font',
            publicPath: '../font'
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 目录清理
    ...htmlwebpackPlugins,
    new miniCssPlugin({
      filename: "style/index.css"
    }), // 样式抽取成独立的文件
  ],
}