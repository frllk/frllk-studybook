const fs = require('fs')
let uid = 3
function readFile(path, prevData) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) reject(err)
      const resData = JSON.parse(data)
      resolve({
        prevData, resData
      })
    })
  })
}

readFile('./data/user.json')
  .then(res => {
    const { resData } = res
    const userInfo = resData.filter(item => item.id === uid)[0]
    throw new Error('失败了')
    return readFile('./data/userCourse.json', userInfo)
  })
  .then(res => {
    const { prevData, resData } = res
    const userId = prevData.id
    const userCourse = resData.filter(item => item.uid === userId)[0]
    return readFile('./data/course.json', {
      username: prevData.username,
      userCourse
    })
  })
  .then(res => {
    const { prevData, resData } = res
    const userCourses = prevData.userCourse.courses
    let _arr = []
    userCourses.map(id => {
      resData.map(item => {
        if (item.id === id) {
          _arr.push(item)
        }
      })
    })
    const userCourseInfo = {
      username: prevData.username,
      courses: _arr
    }
    fs.writeFileSync(`./data/${userCourseInfo.username}.json`, JSON.stringify(userCourseInfo))
  })
  .catch(err => {
    console.log(err);
  })