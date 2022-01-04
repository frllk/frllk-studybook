const fs = require('fs')
function readFile(path, isSetError) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err || isSetError) reject('承诺石沉大海了~~~')
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
  // readFile('./data/user.json'),
  // readFile('./data/userCourse.json'),
  // readFile('./data/course.json')
  // 0,
  // '123',
  // true
])
  .then(res => {
  console.log(res);
  })
// 用于多个异步任务并发运行，他的结果创建承诺之后使用，等待所有任务结果的完成
// iterable内部元素传递的是promise对象集合，如果不是promise，直接resolve
// Promise.resolve(0 || '123' || true)
// iterable内部没有元素，返回空数组