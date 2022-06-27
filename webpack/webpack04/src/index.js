//index.js 顶部
import "@babel/polyfill";

// 按需载入，减少冗余代码
// const arr = [new Promise(() => { }), new Promise(() => { })]
// arr.map(item => {
//   console.log(item);
// })

import React, { Component } from "react";
import {createRoot } from "react-dom/client"
// import ReactDom from "react-dom"

class App extends Component {
  render() {
    return <div>hello react</div>
  }
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />)
// ReactDom.render(<App />, document.getElementById('app'))