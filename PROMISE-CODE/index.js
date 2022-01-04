const MyPromise = require('./MyPromise')
// let promise = new Promise((resolve, rejext) => {
  let promise = new MyPromise((resolve, rejext) => {
  // executor 执行器
  // resolve('success')
  // rejext('error')
  throw new Error('Exception: Error')
})
promise.then((value) => {
  console.log('FullFilled: ' + value);
}, reason => {
  console.log(11111);
  console.log('Rejected: ', reason);
})