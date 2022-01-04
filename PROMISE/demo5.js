const fs = require('fs')
function readFile (path, isSetError) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err || isSetError) reject('承诺石沉大海了~~~')
      const resData = JSON.parse(data)
      resolve(resData)
    })
  })
}

// 谁先完成就返回哪个promise的结果，而且无论是fullfilled 还是 rejected
// 如果可迭代容器为空，返回Promise永远都是pending状态
// 测试资源或者接口的响应速度
// 速度对比，测试响应速度
Promise.race([
  // readFile('./data/user.json', true),
  // readFile('./data/userCourse.json'),
  // readFile('./data/course.json')
])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log('catch', err)
  })
