/*
 * @Author: your name
 * @Date: 2021-12-27 21:00:30
 * @LastEditTime: 2022-01-20 00:41:43
 * @LastEditors: frllk
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \frllk-studybook\PROMISE\demo.js
 */
// // 高阶函数：函数的参数中有函数（一个函数接收一个函数参数），或者是像闭包一样返回一个函数
// /**
//  * @description 执行doSth方法几次之后，去执行cb
//  * @param {*} t 次数
//  * @param {*} cb 回调
//  */
// function doSth(t, cb) {
//   return function () {
//     if (--t === 0) {
//       cb()
//     }
//   }
// }
// /**
//  * @description 将logSth2方法作为cb执行
//  * @event:
//  * @param {*} cb
//  * @return {*}
//  */
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

// // 回调地狱：不好维护，函数里面是可以无限往下走的
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
// // fn调用4次之后才会执行
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
// Promise 参数 executor 执行器
// executor  -> resolve reject 都是函数
// executor： 在new Promise 时调用

// executor是同步执行的
// let promise = new Promise((resolve, reject) => {
//   console.log(1)
// })
// console.log(2);

// executor是同步执行的
let promise = new Promise((resolve, reject) => {
  // resolve('承诺实现')
  // reject('承诺失败')
  // 直接抛出一个错误的话，reject和catch也是可以拿到的
  throw new Error('error：承诺失败')
})

// // then是异步调用
// promise.then((res) => {
//   console.log('then resolve')
// }, (err) => {
//   console.log('then reject', err)
// })

// console.log('window')

// /**
//  * @description then返回一个新的Promise实例
//  */
// promise.then((res) => {
//   // 参数res是resolve出来的结果
//   console.log('then resolve', res);
//   // 这里还是需要返回一个Promise，后面的then才能继续使用
//   return new Promise((resolve, reject) => resolve(res+'111'))
// }, (res) => {
//   // 只返resolve时，这里是不会走的
//   console.log(1, res)
// }).then((res) => {
//   // 此处的res需要上一级then返回Promise对象
//   console.log(2, res);
// })

/**
 * @description then返回一个新的Promise实例，then是异步调用
 */
promise.then((res) => {
  // 参数res是resolve出来的结果
  console.log('then resolve', res);
  // 这里还是需要返回一个Promise，后面的then才能继续使用
  // return new Promise((resolve, reject) => resolve(res+'111'))
}
//   , (res) => {
//   // 只返resolve时，这里是不会走的，只会走reject，需要在Promise中reject出数据
//   console.log(1, res)
// }
).then((res) => {
    // then reject具有穿透作用，如果上一级then的reject对应函数没传的话，这里是可以接收到的
    console.log('res', res);
}
  , (err) => {
  // then里面执行的话，catch中就不会执行
  console.log('then reject', err);
  }
).catch((err) => {
  // 如果前面所有then里面的reject都没有处理的话，错误信息是会走到catch的
  console.log('catch', err);
})


// resolve  reject  pending
// pending -> resolved
// pending -> rejected
// 反过来是不行
// resolved <-> rejected