/*
 * @Author: your name
 * @Date: 2021-12-27 21:00:30
 * @LastEditTime: 2022-01-04 22:37:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \PROMISE-PRO\demo.js
 */
// // 高阶函数：函数的参数中有函数（一个函数接收一个函数参数），或者是像闭包一样返回一个函数
// // function doSth(t, cb) {
// //   return function () {
// //     if (--t === 0) {
// //       cb()
// //     }
// //   }
// // }

// function logSth(cb) {
//   console.log('我终于找到女朋友了！呀呼~~~');
//   cb()
// }

// function logSth2(cb) {
//   console.log('我分手了，oh no~~~~~~~~');
//   cb()
// }

// function logSth3() {
//   console.log('我们又和好了~');
// }

// // let fn = doSth(4, logSth.bind(null, logSth2))

// // 回调地狱
// function doSth(t) {
//   return function () {
//     if(--t === 0) {
//       logSth(function () {
//         logSth2(function () {
//           logSth3()
//         })
//       })
//     }
//   }
// }

// let fn = doSth(4, logSth)

// fn()
// fn()
// fn()
// fn()


// ----------------------------------------------
// ajax异步请求数据
// $.ajax({
//   success(data1) {
//     $.ajax({
//       data: {
//         d: data1
//       },
//       success(data2) {
//         $.ajax({
//           data: {
//             d: data2
//           },
//           success(data3) {
//             $.ajax({
//               data: {
//                 d: data3
//               },
//               success(data) {
                
//               }
//             })
//           }
//         })
//       }
//     })
//   }
// })

// test()

// function test() {
//   console.log('test');
// }

// $.ajax({})
// $.ajax({})

// -----------------------------------------------------
// 异步：谁先回结果谁后回结果是不知道的
// 在处理异步请求的过程中，往往是需要它是同步的 —— 上一个请求有结果之后，才能去进行当前需要做的事情
// 如：A、B，B需要A的结果去进行下一步的事情，这是一个同步的问题
//  回调地狱：在异步编程的基础上，要做到一个同步的结果

// promise：承诺
// 实现承诺   承诺石沉大海   承诺等等结果中。。。
// resolve   reject        pending
// 解决问题   拒绝考虑      苦苦等待
// 解决异步流程化的一种手段（异步：互不相干，互不影响； 流程化：用异步这种方法的时候，需要一个先后顺序）    promise

// Promise 构造函数 需要new
// Promise 参数 excutor 执行器
// excutor  -> resolve reject 都是函数
// excutor： 在new Promise 时调用

// excutor是同步执行的
// let promise = new Promise((resolve, reject) => {
//   console.log(1)
// })
// console.log(2);

let promise = new Promise((resolve, reject) => {
  resolve('承诺实现')
  // reject('承诺石沉大海')
})

// then是异步调用
promise.then((res) => {
  console.log('Then');
  // console.log('res', res);
  return new Promise((resolve, reject) => resolve('成功'))
}).then((res) => {
  console.log(res);
})

console.log('Global');


// resolve  reject  pending
// pending -> resolved
// pending -> rejected
// 反过来是不行
// resolved <-> rejected