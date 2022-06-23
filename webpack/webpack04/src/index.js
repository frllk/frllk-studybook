//index.js 顶部
import "@babel/polyfill";

// 按需载入，减少冗余代码
const arr = [new Promise(() => { }), new Promise(() => { })]
arr.map(item => {
  console.log(item);
})