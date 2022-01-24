const MyPromise = require('./MyPromise3')

// let promise1 = new Promise((resolve, reject) => {
  let promise1 = new MyPromise((resolve, reject) => {
  resolve('promise1')
  // reject('error')
})

let promise2 = promise1.then(value => {
  // return 1;
  // return promise2;
  // return new Error('Error')
  // return Promise.resolve('Promise resolve')
  // return 111
  return new MyPromise((resolve, reject) => {
    // 如果同时调用了resolve，reject怎么办
    // resolve('new Promise resolve')
    setTimeout(() => {
      // resolve('new Promise resolve')
      // 问题1：resolve promise
      resolve(new MyPromise((resolve, reject) => {
        resolve(new MyPromise((resolve, reject) => {
          resolve('new Promise resolve')
        }))
      }))
    }, 2000);
  })
}, reason => {
  return reason
})

// 问题2：then的穿透问题
promise2.then().then().then().then().then(value => {
  // console.log(value)
  throw Error('Error')
  }, (reason) => {
   console.log(reason) 
})
  .catch(e => { // 问题3：catch
  console.log(e)
})