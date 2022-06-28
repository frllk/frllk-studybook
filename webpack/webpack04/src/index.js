// //index.js 顶部
// import "@babel/polyfill";

// // 按需载入，减少冗余代码
// // const arr = [new Promise(() => { }), new Promise(() => { })]
// // arr.map(item => {
// //   console.log(item);
// // })

// import React, { Component } from "react";
// import {createRoot } from "react-dom/client"
// import { webpack } from "webpack";
// // import ReactDom from "react-dom"

// class App extends Component {
//   render() {
//     return <div>hello react</div>
//   }
// }

// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App />)
// // ReactDom.render(<App />, document.getElementById('app'))

// 自定义plugin的实现

// webpack打包编译过程中，会触发一系列的钩子事件（插件）

// 插件：就是找到相应的钩子（时间节点），在上面注册自己的任务（事件主体）

// 插件就是在某个时刻，帮助我们完善一些工作的机制。它的复杂程度比loader高，场景比loader广，因为他作用于整个webpack打包生命周期的


// webpack的打包过程：
// webpack是一个工厂(汽水厂)
// webpack.config.js 是一个订单

// 先进的流水线操作：compiler.hooks

// 监控：compilation


// 给这个工厂派个活，合作生产一个格瓦斯汽水饮品

// webpack准备原材料开始生成（src下的代码）

// 走流水线：
// a：汽水的配料    监控(compilation)
// b：加多少水      监控(compilation)
// c：加入到瓶子里  监控(compilation)
// d：瓶子上加包装  监控(compilation)
// e：装箱          监控(compilation)
// f：封箱子        监控(compilation)