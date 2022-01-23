const MyPromise = require('./MyPromise')
// let promise = new Promise((resolve, rejext) => {
  let promise = new MyPromise((resolve, rejext) => { // executor 执行器 resolve  解决函数  rejext  拒绝函数
  // resolve('success') // 兑现值
  // rejext('error') // 拒绝理由
  throw new Error('Exception: Error')
})
promise.then((value) => {
  console.log('FulFilled: ' + value);
}, reason => {
  console.log(1);
  console.log('Rejected: ', reason);
})