const MyPromise = require('./MyPromise')
// let promise = new Promise((resolve, rejext) => {
  let promise = new MyPromise((resolve, rejext) => { // executor 执行器 resolve  解决函数  rejext  拒绝函数
  // resolve('success') // 兑现值
  // rejext('error') // 拒绝理由
  // throw new Error('Exception: Error')
    setTimeout(() => {
      resolve('success')
    }, 2000);
  })
// then方法中的onFulfilled、onRejected必须按照原有的顺序来执行
promise.then((value) => {
  console.log('FulFilled1: ' + value);
}, reason => {
  console.log(1);
  console.log('Rejected1: ', reason);
})

promise.then((value) => {
  console.log('FulFilled2: ' + value);
}, reason => {
  console.log(1);
  console.log('Rejected2: ', reason);
})