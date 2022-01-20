const fs = require('fs')
let num = 1
function readFile(path, isSetError) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err || isSetError) reject('承诺石沉大海了~~~' + num++)
      const resData = JSON.parse(data)
      resolve(resData)
    })
  })
}

// readFile('./data/user.json').then(res => {
//   console.log('user', res);
// })
// readFile('./data/userCourse.json').then(res => {
//   console.log('userCourse', res);
// })
// readFile('./data/course.json').then(res => {
//   console.log('course', res);
// })

/**
 * 合并三个文件内部的内容为一个数组  并且  按照顺序排列
 * 如果一个读取失败，让这个数据集合返回一个rejected
*/

// 可迭代的对象，iterable类型的数据 -> Array  Set  Map
Promise.all([
  readFile('./data/user.json'),
  readFile('./data/userCourse.json', true),
  readFile('./data/course.json', true)
  // 0,
  // '123',
  // true
])
  .then(res => {
  console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
// 用于多个异步任务并发运行，他的结果创建承诺之后使用，等待所有任务结果的完成
// iterable内部元素传递的是promise对象集合，如果不是promise，直接resolve
// Promise.resolve(0 || '123' || true)
// iterable内部没有元素，返回空数组
// 有一个promise是rejected 实例会调 rejected
// 失败的原因是第一个失败的promise结果

readFile('./data/user.json').then(res => { 
  console.log(res);
  // return Promise.resolve('成功啦~~~w')
  return Promise.reject('失败了')
  // return new Promise((resolve, reject) => resolve('成功啦~~~'))
})
  .then(res => {
  console.log(res);
  }, err => {
    console.log('then: ', err);
  })
  .catch(err => {
  console.log('reject: ', err);
})