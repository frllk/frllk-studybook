// ES5 的模块引入方式
// const fetch = require('node-fetch')
// ES6 的模块引入方式
import fetch from "node-fetch"
// function getData () {
//   return new Promise((resolve, reject) => {
//     fetch('http://study.jsplusplus.com/xiaomi/getXiaomiDatas?phone=true')
//       .then(res => {
//         return res.json()
//       })
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

function getData () {
  return fetch('http://study.jsplusplus.com/xiaomi/getXiaomiDatas?phone=true')
  .then(res => {
    return res.json()
  })
  .then(res => {
    return res
  })
  .catch(err => {
    return err
  })

  // return new Promise((resolve, reject) => {
  //   reject('失败了')
  // })
}


// getData().then(res => {
//   console.log(res);
// })


/**
 * @description async中await用法
 * async await
 * async:是个异步函数
 * await：在异步函数中使用的一个操作符
 * 
 * await 是一个操作符
 * 等待一个promise对象产出结果的操作手段
 * 功能是暂停async函数的执行，等待Promise处理后的结果
 * 假如Promise处理的结果是rejected, 会抛出异常
 * async 函数是通过一个隐式的Promise返回pending状态
 * 
 * async 的意思是当前这个异步函数与同一作用域下的程序是异步的关系
 */
async function loadData() {
  const data = await getData()
  const p1 = await getData(data)
  const p2 = await getData(p1)
  const p3 = await getData(p2)
  const p4 = await getData(p3)
  console.log(p4);
}

loadData()
console.log('Global')

// // async函数返回什么呢？
// console.log(loadData());
