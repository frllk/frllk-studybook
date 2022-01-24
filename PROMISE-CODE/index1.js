let promise = new Promise((resolve, reject) => {
  resolve('First resolve')
})

/**
 * @description promise.then的链式调用
 * 1.通过return传递结果
 */
// promise.then(value => {
//   return value
// })
// .then(value => {
//   console.log(value) // First resolve
// })

// 2.通过新的promise resolve结果
// promise
//   .then(value => {
//     return value
//   })
//   .then(value => {
//     return new Promise((resolve, reject) => {
//       // resolve(value)
//       setTimeout(() => {
//         resolve(value) // 不管是否是异步，都走resolve
//       }, 2000);
//     })
//   })
//   .then(value => {
//     console.log(value) // First resolve
//   })

// 3.通过新的promise reject原因
// promise
//   .then(value => {
//     return value
//   })
//   .then(value => {
//     return new Promise((resolve, reject) => {
//       // resolve(value)
//       setTimeout(() => {
//         reject('Error~~~') // 不管是否是异步，都走reject
//       }, 2000)
//     })
//   })
//   .then(
//     value => {
//       console.log(value) // First resolve
//     },
//     reason => {
//       console.log('rejected', reason) // rejected Error~~~
//     }
//   )

// 4.then走了失败的回调函数后，在走then
// promise
//   .then(value => {
//     return value
//   })
//   .then(value => {
//     return new Promise((resolve, reject) => {
//       // resolve(value)
//       setTimeout(() => {
//         reject('ERROR~~~') // 不管是否是异步，都走reject
//       }, 2000)
//     })
//   })
//   .then(
//     value => {
//       console.log(value) // First resolve
//     },
//     reason => {
//       console.log('rejected', reason) // rejected ERROR~~~
//       // 默认return undefined
//       // return 2344
//       // 即使走了reject，会把失败的返回结果返回,下面继续then的话,会走到下一个成功的回调函数中
//     }
// )
//   .then(value => {
//     console.log(value) // undefined
//     console.log('Fulfilled', value) // Fulfilled undefined
//   }, reason => {
//     console.log('Rejected', reason)
//   })

// 5.then中使用throw new Error, 会走到下一个then失败的回调函数中去
// promise
//   .then(value => {
//     return value
//   })
//   .then(value => {
//     return new Promise((resolve, reject) => {
//       // resolve(value)
//       setTimeout(() => {
//         reject('ERROR~~~') // 不管是否是异步，都走reject
//       }, 2000)
//     })
//   })
//   .then(
//     value => {
//       console.log(value) // First resolve
//     },
//     reason => {
//       console.log('rejected', reason) // rejected ERROR~~~
//     }
// )
//   .then(value => {
//    throw new Error('Throw Error')
//   })
//   .then((value) => {
//     console.log(value)
//   }, reason => {
//     console.log('Exception: ', reason) // Exception:  Error: Throw Error
//   })

// 6.用catch捕获异常
// promise
//   .then(value => {
//     return value
//   })
//   .then(value => {
//     return new Promise((resolve, reject) => {
//       // resolve(value)
//       setTimeout(() => {
//         reject('ERROR~~~') // 不管是否是异步，都走reject
//       }, 2000)
//     })
//   })
//   .then(
//     value => {
//       console.log(value) // First resolve
//     },
//     reason => {
//       console.log('rejected', reason) // rejected ERROR~~~
//       // 1.1 走失败回调函数, 默认把undefined传到下一个成功中
//       // 默认 return undefined
//     }
// )
//   .then(value => {
//     // 1.2 throw error ---> 走下一个失败的回调, 会找最近的那个失败的回调函数走
//    throw new Error('Throw Error')
//   })
//   .then((value) => {
//     console.log(value)
//   }
//     // , reason => {
//     // // 1.2.1 如果有失败的回调则走失败的回调
//     // console.log('Then: ', reason) // Then:  Error: Throw Error
//     // }
//   )
//   .catch(err => {
//     // 1.2.2 如果下一个then没有失败的回调的话, 会走catch
//     console.log('Catch: ', err) // Catch:  Error: Throw Error
//     return 'Catch Error'
//   })
//   .then(value => {
//     console.log('Then: ' + value) // Then: Catch Error
//   })
//   // catch在Promise的源码层面上就是一个then, Catch也是遵循then的运行原则

  
// 成功的条件：
// then return 普通的JavaScript value
// then return 新的promise成功态的结果 value

// 失败的条件
// then return 新的promise的失败态的原因 reason
// then 抛出了异常 throw new Error

// promise 链式调用
// JavaScript jQuery return this
// then 不具备this
// return new Promise
// promise.then(() => {

// })
//   // return new Promise().then
// .then()
let promise2 = promise.then((value) => {
  // return 第一次返回的新的promise结果
}).then((value) => {
  // return 第二次返回的新的promise结果
})
// 这两种是有区别的
let promise2 = promise.then(() => {
  // return 第一次返回的新的promise结果
})
// 第一次then返回的新的promise结果
promise2.then(() => {

})